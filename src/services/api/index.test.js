const { get, post } = require('.').default
global.fetch = jest.fn().mockImplementation(() => Promise.resolve({ ok: true, id: '123' }))

beforeEach(() => {
  global.fetch.mockClear()
})

test('get', () => {
  expect(global.fetch).not.toBeCalled()
  get('/test').then(response => {
    expect(response.id).toBe('123')
  })
})

test('post', () => {
  expect(global.fetch).not.toBeCalled()
  post('/test', { title: 'test' }, { foo: 'bar' }).then(response => {
    expect(response.id).toBe('123')
  })
})
