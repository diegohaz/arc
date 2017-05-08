// https://github.com/diegohaz/arc/wiki/Sagas#unit-testing-sagas
import loadScript from 'simple-load-script'
import { take, put, call, fork } from 'redux-saga/effects'
import saga, * as sagas from './sagas'
import * as actions from './actions'

describe('track', () => {
  beforeEach(() => {
    window.dataLayer = []
  })

  it('calls success', () => {
    const action = { type: 'FOO', bar: 'baz' }
    const generator = sagas.track(action)
    expect(generator.next().value).toBe(1)
    expect(generator.next().done).toBe(true)
  })

  it('calls failure', () => {
    const action = { type: 'FOO', bar: 'baz' }
    const generator = sagas.track(action)
    expect(generator.next().value).toBe(1)
    expect(generator.throw('error').value)
      .toEqual(put(actions.gtmFailure('error', action)))
  })
})

describe('startGTM', () => {
  const payload = { gtmId: 'foo' }

  it('calls success', () => {
    const generator = sagas.startGTM(payload)
    expect(generator.next().value)
      .toEqual(call(loadScript, '//www.googletagmanager.com/gtm.js?id=foo'))
    expect(generator.next().done).toBe(true)
  })

  it('calls failure', () => {
    const generator = sagas.startGTM(payload)
    expect(generator.next().value)
      .toEqual(call(loadScript, '//www.googletagmanager.com/gtm.js?id=foo'))
    expect(generator.throw('foo').value)
      .toEqual(put(actions.gtmFailure('foo', payload)))
  })
})

test('watchAllActions', () => {
  const generator = sagas.watchAllActions()
  expect(generator.next().value).toEqual(take('*'))
  expect(generator.next('foo').value).toEqual(call(sagas.track, 'foo'))
})

test('watchGTMStart', () => {
  const payload = { gtmId: 'foo' }
  const generator = sagas.watchGTMStart()
  expect(generator.next().value).toEqual(take(actions.GTM_START))
  expect(generator.next({ payload }).value).toEqual(call(sagas.startGTM, payload))
  expect(generator.next().value).toEqual(call(sagas.watchAllActions))
})

test('saga', () => {
  const generator = saga()
  expect(generator.next().value).toEqual(fork(sagas.watchGTMStart))
})
