import chalk from 'chalk'
import { Base } from 'yeoman-generator'
import autocomplete from 'inquirer-autocomplete-prompt'
import { defaultTemplatePath, branchUrl, getFilePaths } from '../utils'
import { findPascalPaths, getInfoFromPascalPath, replaceNameInPascalResource } from './helpers'

export default class extends Base {
  constructor (...args) {
    super(...args)
    this.env.adapter.promptModule.registerPrompt('autocomplete', autocomplete)
    this.option('ours')
    this.option('theirs')
    this.option('containers')
    this.type = this.options.containers ? 'container' : 'component'
    this.components = this.getComponents()
  }

  getComponents = () => {
    const { ours, theirs } = this.options
    const all = !ours && !theirs
    const components = []
    if (all || ours) {
      components.push(...findPascalPaths(process.cwd()).map(getInfoFromPascalPath))
    }
    if (all || theirs) {
      components.push(
        ...findPascalPaths(defaultTemplatePath(`src/${this.type}s`), `src/${this.type}s`)
          .map((path) => getInfoFromPascalPath(path, branchUrl()))
      )
    }
    return components
  }

  prompting () {
    const choices = this.components.map((component) => ({
      name: `${component.name} ${chalk.gray(component.url)}`,
      short: component.name,
      value: component
    }))

    const prompts = [{
      type: 'autocomplete',
      name: 'component',
      message: `Which ${this.type} do you want to clone?`,
      source: /* istanbul ignore next */ (answers, input) =>
        Promise.resolve(
          input ? choices.filter((choice) => choice.name.indexOf(input) >= 0) : choices
        )
    }, {
      type: 'input',
      name: 'name',
      message: ({ component }) => `How do you want to name the ${component.name} ${this.type}?`,
      default: ({ component }) => component.name
    }, {
      type: 'input',
      name: 'folder',
      message: ({ name }) => `In which folder do you want to put the ${name} ${this.type}?`,
      default: ({ component }) => component.folder
    }]

    return this.prompt(prompts).then((answers) => {
      this.answers = answers
    })
  }

  writing () {
    const { name, folder, component } = this.answers
    const isTheirs = component.url.indexOf('https') === 0
    const templatePath = isTheirs ? defaultTemplatePath : this.destinationPath.bind(this)

    if (component.isDir) {
      const tPath = (...args) => templatePath(component.path, ...args)
      const dPath = (...args) => this.destinationPath(folder, name, ...args)
      const filePaths = getFilePaths(tPath())
      this.fs.copy(tPath(), dPath())

      filePaths.forEach((filePath) => {
        const contents = this.fs.read(dPath(filePath))
        this.fs.write(dPath(filePath), replaceNameInPascalResource(contents, component.name, name))

        if (filePath.indexOf(component.name) >= 0 && component.name !== name) {
          this.fs.move(dPath(filePath), dPath(filePath.replace(component.name, name)))
        }
      })
    } else {
      const tPath = templatePath(component.path)
      const dPath = this.destinationPath(folder, name + component.extension)
      this.fs.copy(tPath, dPath)
      const contents = this.fs.read(tPath)
      this.fs.write(dPath, replaceNameInPascalResource(contents, component.name, name))
    }
  }
}
