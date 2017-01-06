import path from 'path'
import * as utils from './utils'

test('templatePath', () => {
  expect(utils.templatePath('master'))
    .toBe(path.join(__dirname, '../templates/master'))
  expect(utils.templatePath('master', 'src'))
    .toBe(path.join(__dirname, '../templates/master/src'))
})

test('defaultTemplatePath', () => {
  expect(utils.defaultTemplatePath())
    .toBe(path.join(__dirname, '../templates', utils.defaultBranch))
  expect(utils.defaultTemplatePath('src'))
    .toBe(path.join(__dirname, '../templates', utils.defaultBranch, 'src'))
})

test('branchUrl', () => {
  expect(utils.branchUrl())
    .toBe(`${utils.repositoryUrl}/tree/${utils.defaultBranch}`)
  expect(utils.branchUrl('foo'))
    .toBe(`${utils.repositoryUrl}/tree/foo`)
})

test('resourceUrl', () => {
  expect(utils.resourceUrl('foo'))
    .toBe(`${utils.repositoryUrl}/tree/${utils.defaultBranch}/foo`)
  expect(utils.resourceUrl('/foo'))
    .toBe(`${utils.repositoryUrl}/tree/${utils.defaultBranch}/foo`)
  expect(utils.resourceUrl('/foo/bar/'))
    .toBe(`${utils.repositoryUrl}/tree/${utils.defaultBranch}/foo/bar`)
})

test('getFilePaths', () => {
  expect(utils.getFilePaths(path.join(__dirname, '../fixtures/components/App'))).toEqual([
    'App.js',
    'FooBar.js',
    'FooBar.test.js',
    'index.js',
    'index.ts',
    'test/index.js'
  ])
})
