import path from 'path'
import glob from 'glob-fs'
import helpers from 'yeoman-test'
import assert from 'yeoman-assert'

const branches = ['master', 'redux', 'universal-redux']

const getTemplateFiles = (...paths) => {
  const fs = glob()
  return fs.readdirSync('**/*', { cwd: path.join(__dirname, '../../templates', ...paths) })
}

branches.forEach((branch) => {
  describe(branch, () => {
    beforeAll(() =>
      helpers.run(path.join(__dirname)).withPrompts({ branch })
    )

    it('copies files from the correct branch', () => {
      const templateFiles = getTemplateFiles(branch)
        .filter((file) => ['src', '.git'].indexOf(file.split('/')[0]) < 0)
        .map((file) => file.replace(/^src-clean/, 'src'))
      assert.file(templateFiles)
    })
  })
})
