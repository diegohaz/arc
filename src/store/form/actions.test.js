import * as actions from './actions'

test('setCsrfToken', () => {
  expect(actions.setCsrfToken('test')).toEqual({
    type: actions.FORM_SET_CSRF_TOKEN,
    token: 'test'
  })
})
