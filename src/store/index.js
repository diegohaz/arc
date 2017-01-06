import chalk from 'chalk'
import fs from 'fs'
import { Base } from 'yeoman-generator'
import autocomplete from 'inquirer-autocomplete-prompt'
import { defaultTemplatePath, branchUrl } from '../utils'
import {
  getStorePath,
  findStorePaths,
  getInfoFromStorePath,
  transformName,
  replaceNames
} from './helpers'

export default class extends Base {
  constructor (...args) {
    super(...args)
    this.env.adapter.promptModule.registerPrompt('autocomplete', autocomplete)
    this.option('ours')
    this.option('theirs')
    this.stores = this.getStores()
  }

  getStores = () => {
    const { ours, theirs } = this.options
    const all = !ours && !theirs
    const stores = []
    if (all || ours) {
      stores.push(...findStorePaths(process.cwd()).map(getInfoFromStorePath))
    }
    if (all || theirs) {
      stores.push(
        ...findStorePaths(defaultTemplatePath())
          .map((path) => getInfoFromStorePath(path, branchUrl()))
      )
    }
    return stores
  }

  prompting () {
    const choices = this.stores.map((store) => ({
      name: `${store.name} ${chalk.gray(store.url)}`,
      short: store.name,
      value: store
    }))

    const prompts = [{
      type: 'autocomplete',
      name: 'store',
      message: 'Which store do you want to clone?',
      source: /* istanbul ignore next */ (answers, input) =>
        Promise.resolve(
          input ? choices.filter((choice) => choice.name.indexOf(input) >= 0) : choices
        )
    }, {
      type: 'input',
      name: 'name',
      message: ({ store }) => `How do you want to name the ${store.name} store?`,
      default: ({ store }) => store.name
    }]

    return this.prompt(prompts).then((answers) => {
      this.answers = answers
    })
  }

  writing () {
    const { name, store } = this.answers
    const isTheirs = store.url.indexOf('https') === 0
    const names = transformName(name)
    const originalNames = transformName(store.name)
    const dPath = (...args) => this.destinationPath(getStorePath(...args))
    const tPath = (...args) => isTheirs
      ? defaultTemplatePath(getStorePath(...args))
      : dPath(...args)

    fs.readdirSync(tPath(store.name)).forEach((file) => {
      const contents = replaceNames(
        this.fs.read(tPath(store.name, file)),
        originalNames,
        names
      )
      this.fs.copy(tPath(store.name, file), dPath(name, file))
      this.fs.write(dPath(name, file), contents)
    })
  }
}
