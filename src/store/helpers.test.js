import path from 'path'
import * as helpers from './helpers'

test('getStorePath', () => {
  expect(helpers.getStorePath()).toBe('src/store')
  expect(helpers.getStorePath('foo')).toBe('src/store/foo')
})

test('findStorePaths', () => {
  expect(helpers.findStorePaths(path.join(__dirname, '../../fixtures'))).toEqual(['foo'])
})

test('getInfoFromStorePath', () => {
  expect(helpers.getInfoFromStorePath('foo')).toEqual({
    name: 'foo',
    url: 'src/store/foo'
  })
  expect(helpers.getInfoFromStorePath('foo', 'foo')).toEqual({
    name: 'foo',
    url: 'foo/src/store/foo'
  })
})

test('transformName', () => {
  expect(helpers.transformName('foo')).toEqual({
    camel: 'foo',
    pascal: 'Foo',
    camelPlural: 'foos',
    pascalPlural: 'Foos',
    constant: 'FOO'
  })
  expect(helpers.transformName('free person')).toEqual({
    camel: 'freePerson',
    pascal: 'FreePerson',
    camelPlural: 'freePeople',
    pascalPlural: 'FreePeople',
    constant: 'FREE_PERSON'
  })
})

test('replaceNames', () => {
  const post = {
    camel: 'post',
    pascal: 'Post',
    camelPlural: 'posts',
    pascalPlural: 'Posts',
    constant: 'POST'
  }
  const person = {
    camel: 'person',
    pascal: 'Person',
    camelPlural: 'people',
    pascalPlural: 'People',
    constant: 'PERSON'
  }

  expect(helpers.replaceNames('POST_LIST postCreate listPosts api.post', post, person))
    .toBe('PERSON_LIST personCreate listPeople api.post')
})
