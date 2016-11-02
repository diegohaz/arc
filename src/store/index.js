import fs from 'fs'
import _ from 'lodash'
import pluralize from 'pluralize'
import Base from '../base'

export default class extends Base {
  constructor (...args) {
    super(...args)

    this.stores = fs.readdirSync(this.templatePath('src/store'))
      .filter((path) => fs.statSync(this.templatePath(`src/store/${path}`)).isDirectory())

    this.names = {}
    this.storesToCreate = []
  }

  prompting () {
    const prompts = [{
      type: 'checkbox',
      name: 'stores',
      message: 'Which store(s) do you want to create?',
      pageSize: 20,
      choices: this.stores
    }]

    return this.prompt(prompts).then(({ stores }) => {
      this.storesToCreate = stores

      const prompts = this.storesToCreate.map((store) => ({
        type: 'input',
        name: store,
        message: `How to call the ${store} store?`,
        default: store
      }))

      return this.prompt(prompts)
    }).then((names) => {
      this.names = names
    })
  }

  writing () {
    this.storesToCreate.forEach((component) => {
      const name = this.names[component]
      const camel = _.camelCase(name)
      const pascal = _.upperFirst(camel)
      const pascals = pluralize(pascal)
      const constant = _.snakeCase(name).toUpperCase()
      const originalCamel = _.camelCase(component)
      const originalPascal = _.upperFirst(originalCamel)
      const originalPascals = pluralize(originalPascal)
      const originalConstant = _.snakeCase(component).toUpperCase()

      const tPath = (...args) => this.templatePath(`src/store/${component}`, ...args)
      const dPath = (...args) => this.destinationPath(`src/store/${name}`, ...args)

      fs.readdirSync(tPath()).forEach((file) => {
        let contents = this.fs.read(tPath(file))
        contents = contents.replace(new RegExp(originalCamel, 'g'), camel)
        contents = contents.replace(new RegExp(originalPascals, 'g'), pascals)
        contents = contents.replace(new RegExp(originalPascal, 'g'), pascal)
        contents = contents.replace(new RegExp(originalConstant, 'g'), constant)

        this.fs.copy(tPath(file), dPath(file))
        this.fs.write(dPath(file), contents)
      })

      if (this.fs.exists(dPath('../index.js'))) {
        let contents = this.fs.read(dPath('../index.js'))
        let lines = contents.split('\n')

        // search imports
        let importIndexes = lines.reduce((a, b, i) => {
          b.match(/^import \S+ from '\./) && a.push(i)
          return a
        }, [])

        if (importIndexes.length) {
          const imports = importIndexes.map((i) => lines[i])
          imports.push(`import ${camel} from './${name}/reducer'`)
          lines = [
            ...lines.slice(0, importIndexes[0]),
            ...imports.sort(),
            ...lines.slice(importIndexes[importIndexes.length - 1] + 1)
          ]
        } else {
          const reducersIndex = lines.findIndex((l) => l.match(/^const reducer/))
          if (reducersIndex >= 0) {
            lines = [
              ...lines.slice(0, reducersIndex),
              `import ${camel} from './${name}/reducer'\n`,
              ...lines.slice(reducersIndex)
            ]
          }
        }

        // search reducers declaration
        const startOfReducers = lines.findIndex((l) => l.match(/^const reducer/))
        const endOfReducers = lines.slice(startOfReducers).indexOf('}') + startOfReducers
        const reducers = lines.slice(startOfReducers + 1, endOfReducers)
          .map((l) => l.replace(',', ''))
        reducers.push(`  ${camel}`)
        lines = [
          ...lines.slice(0, startOfReducers + 1),
          ...reducers.sort().map((r, i) => i === reducers.length - 1 ? r : r + ','),
          ...lines.slice(endOfReducers)
        ]

        contents = lines.join('\n')
        this.fs.write(dPath('../index.js'), contents)
      }
    })
  }
}
