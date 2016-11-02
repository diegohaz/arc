import path from 'path'
import fs from 'fs'
import { Base } from 'yeoman-generator'

export default class extends Base {
  set branch (branch) {
    this._branch = branch
  }

  get branch () {
    return this._branch || this.config.get('branch') || 'universal-redux'
  }

  constructor (...args) {
    super(...args)
    this.templatesPath = path.join(__dirname, '../templates')
    this.branches = fs.readdirSync(this.templatesPath)
  }

  templatePath (...paths) {
    return path.join(this.templatesPath, this.branch, ...paths)
  }

  replaceName (content, oldName, newName) {
    return content.replace(
      new RegExp(`([^a-zA-Z0-9_$])${oldName}([^a-zA-Z0-9_$])`, 'g'),
      `$1${newName}$2`
    )
  }
}
