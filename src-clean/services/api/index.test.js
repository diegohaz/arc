import axios from 'axios'
import { stub, spy } from 'sinon'

const request = spy()

stub(axios, 'create', () => ({ request }))

const api = require('.').default

beforeEach(() => {
  request.reset()
})

test('get', () => {
  expect(request.called).toBe(false)
  api.get('/test', { foo: 'bar' })
  expect(request.calledWith({
    method: 'get',
    url: '/test',
    foo: 'bar'
  })).toBe(true)
})

test('post', () => {
  expect(request.called).toBe(false)
  api.post('/test', { title: 'test' }, { foo: 'bar' })
  expect(request.calledWith({
    method: 'post',
    url: '/test',
    foo: 'bar',
    data: { title: 'test' }
  })).toBe(true)
})
