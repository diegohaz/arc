import path from 'path'
import glob from 'glob'
import helpers from 'yeoman-test'
import assert from 'yeoman-assert'

const branches = ['master', 'redux', 'universal-redux']

const getTemplateFiles = (...paths) => {
  const cwd = path.join(__dirname, '../../templates', ...paths)
  return glob.sync('**/*', { cwd })
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
