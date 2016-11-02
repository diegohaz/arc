import fs from 'fs'
import { Separator } from 'inquirer'
import _ from 'lodash'
import Base from '../base'

export default class extends Base {
  constructor (...args) {
    super(...args)

    this.components = {}
    this.dependencies = {}
    this.types = {}
    this.names = {}
    this.chosenComponents = []
    this.componentsToCreate = []

    this.option('all', {
      desc: 'Display all components, not only the generic ones',
      alias: 'A',
      type: Boolean,
      default: false
    })

    const listTypes = () => fs.readdirSync(this.templatePath('src/components'))
      .filter((path) => fs.statSync(this.templatePath(`src/components/${path}`)).isDirectory())

    const listComponents = (type) => fs.readdirSync(this.templatePath(`src/components/${type}`))
      .filter((path) => this.options.all ? path !== 'index.js' : path.match(/^Generic/))

    // Populate components and types
    listTypes().forEach((type) => {
      this.components[type] = listComponents(type)
      this.components[type].forEach((component) => {
        this.types[component] = type
      })
    })

    // Populate dependencies
    Object.keys(this.components).forEach((type) => {
      this.components[type].forEach((component) => {
        const path = this.templatePath(`src/components/${type}/${component}/index.js`)
        const contents = this.fs.read(path)
        const match = contents.match(/import \{ (.+) \} from 'components'/)
        this.dependencies[component] = match ? match[1].split(', ') : []
      })
    })
  }

  _getDependencies (component) {
    const dependencies = this.dependencies[component].map((dependency) => {
      return [ dependency, ...this._getDependencies(dependency) ]
    })

    return _.uniq(_.flatten(dependencies))
  }

  prompting () {
    const isJustADependency = (component) => this.chosenComponents.indexOf(component) < 0

    const prompts = [{
      type: 'checkbox',
      name: 'components',
      message: 'Which component(s) do you want to create?',
      pageSize: 20,
      choices: Object.keys(this.components).map((type) => {
        return this.options.all
          ? [ new Separator(type), ...this.components[type] ]
          : this.components[type]
      }).reduce((a, b) => [ ...a, ...b ], [])
    }]

    return this.prompt(prompts).then(({ components }) => {
      // Populate chosenComponents
      this.chosenComponents = components
      // Populate componentsToCreate
      this.componentsToCreate = _.uniq(_.flatten([
        ...components.map((component) => this._getDependencies(component)),
        ...components
      ]))

      const prompts = this.componentsToCreate.map((component) => ({
        type: 'input',
        name: component,
        message: `How to call the ${component} component?`,
        default: isJustADependency(component) && this.config.get(component) || component
      }))

      return this.prompt(prompts)
    }).then((names) => {
      // Populate names
      this.names = names

      Object.keys(names).forEach((component) => {
        if (component !== names[component] && isJustADependency(component)) {
          this.config.set({ [component]: names[component] })
        }
      })
    })
  }

  writing () {
    this.componentsToCreate.forEach((component) => {
      const type = this.types[component]
      const name = this.names[component]
      const tPath = (...args) => this.templatePath(`src/components/${type}/${component}`, ...args)
      const dPath = (...args) => this.destinationPath(`src/components/${type}/${name}`, ...args)

      if (this.fs.exists(dPath('index.js'))) {
        return
      }

      let contents = this.fs.read(tPath('index.js'))
      let testContents = this.fs.read(tPath('index.test.js'))

      Object.keys(this.names).forEach((component) => {
        if (component !== this.names[component]) {
          contents = this.replaceName(contents, component, this.names[component])
          testContents = this.replaceName(testContents, component, this.names[component])
        }
      })

      this.fs.copy(tPath(), dPath())
      this.fs.write(dPath('index.js'), contents)
      this.fs.write(dPath('index.test.js'), testContents)

      if (this.fs.exists(dPath('../index.js'))) {
        let indexContents = this.fs.read(dPath('../index.js'))
        const indexLines = indexContents.trim().split('\n')
        indexLines.push(`export ${name} from './${name}'`)
        indexContents = indexLines.sort().join('\n') + '\n'
        this.fs.write(dPath('../index.js'), indexContents)
      }
    })
  }
}
