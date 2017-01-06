import path from 'path'
import helpers from 'yeoman-test'
import assert from 'yeoman-assert'
import fs from 'fs-extra'
import { defaultTemplatePath, branchUrl } from '../utils'
import { findStorePaths, getInfoFromStorePath } from './helpers'

const templateStores = findStorePaths(defaultTemplatePath())
  .map((path) => getInfoFromStorePath(path, branchUrl()))

const fixtureStores = findStorePaths(path.join(__dirname, '../../fixtures'))
  .map(getInfoFromStorePath)

describe('from template', () => {
  const store = templateStores.find((c) => c.name === 'post')

  it('generates store properly', () => {
    return helpers.run(path.join(__dirname))
      .withOptions({ ours: true })
      .withPrompts({ store })
      .then(() => {
        assert.file([
          'src/store/post',
          'src/store/post/actions.js',
          'src/store/post/actions.test.js',
          'src/store/post/reducer.js',
          'src/store/post/reducer.test.js',
          'src/store/post/sagas.js',
          'src/store/post/sagas.test.js',
          'src/store/post/selectors.js',
          'src/store/post/selectors.test.js'
        ])
      })
  })

  it('generates store properly with different name', () => {
    return helpers.run(path.join(__dirname))
      .withOptions({ theirs: true })
      .withPrompts({ store, name: 'foo' })
      .then(() => {
        assert.file([
          'src/store/foo',
          'src/store/foo/actions.js',
          'src/store/foo/actions.test.js',
          'src/store/foo/reducer.js',
          'src/store/foo/reducer.test.js',
          'src/store/foo/sagas.js',
          'src/store/foo/sagas.test.js',
          'src/store/foo/selectors.js',
          'src/store/foo/selectors.test.js'
        ])
      })
  })
})

describe('from fixtures', () => {
  it('generates store properly', () => {
    const store = fixtureStores.find((c) => c.name === 'foo')
    return helpers.run(path.join(__dirname))
      .inTmpDir((dir) => {
        fs.copySync(path.join(__dirname, '../../fixtures'), dir)
      })
      .withPrompts({ store })
      .then((dir) => {
        assert.file(['src/store/foo', 'src/store/foo/bar.js'])
      })
  })

  it('generates store properly with different name', () => {
    const store = fixtureStores.find((c) => c.name === 'foo')
    return helpers.run(path.join(__dirname))
      .inTmpDir((dir) => {
        fs.copySync(path.join(__dirname, '../../fixtures'), dir)
      })
      .withPrompts({ store, name: 'bar' })
      .then((dir) => {
        assert.file(['src/store/bar', 'src/store/bar/bar.js'])
      })
  })
})
