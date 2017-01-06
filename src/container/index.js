import { Base } from 'yeoman-generator'

export default class extends Base {
  constructor (...args) {
    super(...args)
    this.option('ours')
    this.option('theirs', { default: true })
  }

  initializing () {
    this.composeWith(require.resolve('../component'), {
      options: {
        containers: true,
        ...this.options
      }
    })
  }
}
