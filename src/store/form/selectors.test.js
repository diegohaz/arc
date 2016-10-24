import * as selectors from './selectors'

test('initialState', () => {
  expect(selectors.initialState).toEqual({})
})

test('getForm', () => {
  expect(selectors.getForm()).toEqual({})
  expect(selectors.getForm({})).toEqual({})
  expect(selectors.getForm({}, 'test')).toEqual({})
  expect(selectors.getForm({ test: 1 }, 'test')).toBe(1)
})

test('getValues', () => {
  expect(selectors.getValues()).toEqual({})
  expect(selectors.getValues({})).toEqual({})
  expect(selectors.getValues({}, 'test')).toEqual({})
  expect(selectors.getValues({ test: {} }, 'test')).toEqual({})
  expect(selectors.getValues({ test: { values: 1 } }, 'test')).toBe(1)
})

test('getCsrfToken', () => {
  expect(selectors.getCsrfToken()).toBeUndefined()
  expect(selectors.getCsrfToken({})).toBeUndefined()
  expect(selectors.getCsrfToken({ csrfToken: 1 })).toBe(1)
})
