import fs from 'fs'
import Base from '../base'

export default class extends Base {
  constructor (...args) {
    super(...args)

    this.containers = fs.readdirSync(this.templatePath(`src/containers`))
      .filter((path) => path !== 'index.js')
      .map((path) => path.replace(/\.[^.]+$/, ''))
    this.names = {}
    this.containersToCreate = []
  }

  prompting () {
    const prompts = [{
      type: 'checkbox',
      name: 'containers',
      message: 'Which container(s) do you want to create?',
      pageSize: 20,
      choices: this.containers
    }]

    return this.prompt(prompts).then(({ containers }) => {
      this.containersToCreate = containers

      const prompts = this.containersToCreate.map((container) => ({
        type: 'input',
        name: container,
        message: `How to call the ${container} container?`,
        default: container
      }))

      return this.prompt(prompts)
    }).then((names) => {
      this.names = names
    })
  }

  writing () {
    this.containersToCreate.forEach((container) => {
      const name = this.names[container]
      const tPath = (...args) => this.templatePath(`src/containers/${container}.js`, ...args)
      const dPath = (...args) => this.destinationPath(`src/containers/${name}.js`, ...args)

      let contents = this.fs.read(tPath())
      contents = contents.replace(new RegExp(container, 'g'), name)

      this.fs.copy(tPath(), dPath())
      this.fs.write(dPath(), contents)

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
