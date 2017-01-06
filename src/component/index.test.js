import path from 'path'
import helpers from 'yeoman-test'
import assert from 'yeoman-assert'
import fs from 'fs-extra'
import { defaultTemplatePath, branchUrl } from '../utils'
import { findPascalPaths, getInfoFromPascalPath } from './helpers'

const fixtureComponents = findPascalPaths(path.join(__dirname, '../../fixtures'))
  .map(getInfoFromPascalPath)

const templateComponents = findPascalPaths(defaultTemplatePath())
  .map((path) => getInfoFromPascalPath(path, branchUrl()))

describe('from template', () => {
  const component = templateComponents.find((c) => c.name === 'Button')

  it('generates component properly', () => {
    return helpers.run(path.join(__dirname))
      .withOptions({ ours: true })
      .withPrompts({ component })
      .then(() => {
        assert.file([
          'src/components/atoms/Button',
          'src/components/atoms/Button/index.js',
          'src/components/atoms/Button/index.stories.js',
          'src/components/atoms/Button/index.test.js'
        ])
      })
  })

  it('generates component properly with different name', () => {
    return helpers.run(path.join(__dirname))
      .withOptions({ theirs: true })
      .withPrompts({ component, name: 'Foo' })
      .then(() => {
        assert.file([
          'src/components/atoms/Foo',
          'src/components/atoms/Foo/index.js',
          'src/components/atoms/Foo/index.stories.js',
          'src/components/atoms/Foo/index.test.js'
        ])
      })
  })

  it('generates component properly with different folder', () => {
    return helpers.run(path.join(__dirname))
      .withOptions({ containers: true })
      .withPrompts({ component, folder: 'foo' })
      .then(() => {
        assert.file([
          'foo/Button',
          'foo/Button/index.js',
          'foo/Button/index.stories.js',
          'foo/Button/index.test.js'
        ])
      })
  })
})

describe('from fixtures', () => {
  it('generates component properly', () => {
    const component = fixtureComponents.find((c) => c.name === 'App')
    return helpers.run(path.join(__dirname))
      .inTmpDir((dir) => {
        fs.copySync(path.join(__dirname, '../../fixtures'), dir)
      })
      .withPrompts({ component })
      .then((dir) => {
        assert.file([
          'components/App/test',
          'components/App/App.js',
          'components/App/FooBar.js',
          'components/App/FooBar.test.js',
          'components/App/index.js',
          'components/App/index.ts'
        ])
      })
  })

  it('generates component properly with different name', () => {
    const component = fixtureComponents.find((c) => c.name === 'App')
    return helpers.run(path.join(__dirname))
      .inTmpDir((dir) => {
        fs.copySync(path.join(__dirname, '../../fixtures'), dir)
      })
      .withPrompts({ component, name: 'Foo' })
      .then((dir) => {
        assert.file(['components/Foo/Foo.js'])
      })
  })

  it('generates component properly with different folder', () => {
    const component = fixtureComponents.find((c) => c.name === 'FooBar')
    return helpers.run(path.join(__dirname))
      .inTmpDir((dir) => {
        fs.copySync(path.join(__dirname, '../../fixtures'), dir)
      })
      .withPrompts({ component, folder: 'foo/bar' })
      .then((dir) => {
        assert.file(['foo/bar/FooBar.js'])
      })
  })
})
