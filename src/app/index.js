import fs from 'fs'
import Base from '../base'

export default class extends Base {
  prompting () {
    const prompts = [{
      type: 'list',
      name: 'branch',
      message: 'What branch do you want your project to be based on?',
      choices: this.branches
    }]

    return this.prompt(prompts).then((answers) => {
      this.config.set({
        branch: answers.branch
      })
    })
  }

  writing () {
    const ignoredPaths = ['src', 'src-clean', 'dist', '.git']
    const sources = fs.readdirSync(this.templatePath())
      .filter((source) => ignoredPaths.indexOf(source) === -1)

    sources.forEach((source) => {
      this.fs.copy(this.templatePath(source), this.destinationPath(source), { dot: true })
    })

    this.fs.copy(this.templatePath('src-clean'), this.destinationPath('src'))
  }
}
