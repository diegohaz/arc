import fs from 'fs'
import { Base } from 'yeoman-generator'
import { branchList, branchUrl, templatePath } from '../utils'

export default class extends Base {
  prompting () {
    const prompts = [{
      type: 'list',
      name: 'branch',
      message: 'What branch do you want your project to be based on?',
      choices: branchList.map((branch) => ({
        name: `${branch} (${branchUrl(branch)})`,
        value: branch,
        short: branch
      }))
    }]

    return this.prompt(prompts).then(({ branch }) => {
      this.branch = branch
    })
  }

  writing () {
    const ignoredPaths = ['src', 'src-clean', '.git']
    const sources = fs.readdirSync(templatePath(this.branch))
      .filter((source) => ignoredPaths.indexOf(source) === -1)

    sources.forEach((source) => {
      this.fs.copy(templatePath(this.branch, source), this.destinationPath(source), { dot: true })
    })

    this.fs.copy(templatePath(this.branch, 'src-clean'), this.destinationPath('src'))
    try {
      this.fs.move(this.destinationPath('.npmignore'), this.destinationPath('.gitignore'))
    } catch (e) {}
  }
}
