import path from 'path'
import * as helpers from './helpers'

test('getNormalizedPascalPath', () => {
  expect(helpers.getNormalizedPascalPath('A.js')).toBe('A.js')
  expect(helpers.getNormalizedPascalPath('Foo.js')).toBe('Foo.js')
  expect(helpers.getNormalizedPascalPath('Foo.test.js')).toBe('Foo.js')
  expect(helpers.getNormalizedPascalPath('FooBar.js')).toBe('FooBar.js')
  expect(helpers.getNormalizedPascalPath('FooBar/baz.js')).toBe('FooBar/')
  expect(helpers.getNormalizedPascalPath('foo/bar/Baz.js')).toBe('foo/bar/Baz.js')
  expect(helpers.getNormalizedPascalPath('foo/A/baz.js')).toBe('foo/A/')
  expect(helpers.getNormalizedPascalPath('foo/BarBoo/baz.js')).toBe('foo/BarBoo/')
  expect(helpers.getNormalizedPascalPath('foo/Bar/Baz.js')).toBe('foo/Bar/Baz.js')
  expect(helpers.getNormalizedPascalPath('Foo/bar/Baz.js')).toBe('Foo/bar/Baz.js')
  expect(helpers.getNormalizedPascalPath('Foo/bar/baz.js')).toBe('Foo/')
  expect(helpers.getNormalizedPascalPath('bar/FooBoo/bar/Baz.js')).toBe('bar/FooBoo/bar/Baz.js')
  expect(helpers.getNormalizedPascalPath('FooBoo/bar/Baz.js')).toBe('FooBoo/bar/Baz.js')
  expect(helpers.getNormalizedPascalPath('FooBoo/BarBoo/baz.js')).toBe('FooBoo/BarBoo/')
  expect(helpers.getNormalizedPascalPath('foo/bar/BazBoo.js')).toBe('foo/bar/BazBoo.js')
  expect(helpers.getNormalizedPascalPath('foo/BarBaz/BarBaz.js')).toBe('foo/BarBaz/')
})

test('getNameFromPascalPath', () => {
  expect(helpers.getNameFromPascalPath('A.js')).toBe('A')
  expect(helpers.getNameFromPascalPath('Foo.js')).toBe('Foo')
  expect(helpers.getNameFromPascalPath('FooBar.js')).toBe('FooBar')
  expect(helpers.getNameFromPascalPath('FooBar/baz.js')).toBe('FooBar')
  expect(helpers.getNameFromPascalPath('foo/bar/Baz.js')).toBe('Baz')
  expect(helpers.getNameFromPascalPath('foo/A/baz.js')).toBe('A')
  expect(helpers.getNameFromPascalPath('foo/BarBoo/baz.js')).toBe('BarBoo')
  expect(helpers.getNameFromPascalPath('foo/Bar/Baz.js')).toBe('Baz')
  expect(helpers.getNameFromPascalPath('Foo/bar/Baz.js')).toBe('Baz')
  expect(helpers.getNameFromPascalPath('Foo/bar/baz.js')).toBe('Foo')
  expect(helpers.getNameFromPascalPath('FooBoo/bar/Baz.js')).toBe('Baz')
  expect(helpers.getNameFromPascalPath('FooBoo/BarBoo/baz.js')).toBe('BarBoo')
  expect(helpers.getNameFromPascalPath('foo/bar/BazBoo.js')).toBe('BazBoo')
})

test('isDir', () => {
  expect(helpers.isDir('Foo/')).toBe(true)
  expect(helpers.isDir('Foo.js')).toBe(false)
  expect(helpers.isDir('Foo/Bar/')).toBe(true)
  expect(helpers.isDir('Foo/Bar.js')).toBe(false)
})

test('getFolderFromPascalPath', () => {
  expect(helpers.getFolderFromPascalPath('Bar.js')).toBe('.')
  expect(helpers.getFolderFromPascalPath('Foo/Bar.js')).toBe('Foo')
  expect(helpers.getFolderFromPascalPath('Foo/Bar/')).toBe('Foo')
  expect(helpers.getFolderFromPascalPath('Foo/Bar')).toBe('Foo')
})

test('getInfoFromPascalPath', () => {
  expect(helpers.getInfoFromPascalPath('A.js')).toEqual({
    name: 'A',
    isDir: false,
    extension: '.js',
    folder: '.',
    url: 'A.js',
    path: 'A.js'
  })
  expect(helpers.getInfoFromPascalPath('foo/Bar.js', 'test/')).toEqual({
    name: 'Bar',
    isDir: false,
    extension: '.js',
    folder: 'foo',
    url: 'test/foo/Bar.js',
    path: 'foo/Bar.js'
  })
  expect(helpers.getInfoFromPascalPath('foo/Bar/')).toEqual({
    name: 'Bar',
    isDir: true,
    extension: '',
    folder: 'foo',
    url: 'foo/Bar/',
    path: 'foo/Bar/'
  })
})

test('findPascalPaths', () => {
  expect(helpers.findPascalPaths(path.join(__dirname, '../../fixtures'))).toEqual([
    'B.js',
    'components/A.js',
    'components/App/',
    'components/App/FooBar.js',
    'FooBarBaz.js',
    'FooBoo/foo/Bar.js',
    'FooBoo/'
  ])
  expect(helpers.findPascalPaths(path.join(__dirname, '../../fixtures'), 'foo/')).toEqual([
    'foo/B.js',
    'foo/components/A.js',
    'foo/components/App/',
    'foo/components/App/FooBar.js',
    'foo/FooBarBaz.js',
    'foo/FooBoo/foo/Bar.js',
    'foo/FooBoo/'
  ])
})

test('replaceNameInPascalResource', () => {
  const contents = `
    import FooBarBaz from 'components'
    class FooBar extends Component {}
    export default FooBar
  `
  expect(helpers.replaceNameInPascalResource(contents, 'FooBar', 'BarFoo')).toEqual(`
    import FooBarBaz from 'components'
    class BarFoo extends Component {}
    export default BarFoo
  `)
})
