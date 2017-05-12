// https://github.com/diegohaz/arc/wiki/Sagas#unit-testing-sagas
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#gtm
import loadScript from 'simple-load-script'
import { all, take, put, call, fork } from 'redux-saga/effects'
import saga, * as sagas from './sagas'
import * as actions from './actions'

describe('track', () => {
  beforeEach(() => {
    window.dataLayer = []
  })

  it('calls success without meta', () => {
    const generator = sagas.track('FOO')
    expect(generator.next().value).toEqual({ event: 'FOO' })
    expect(generator.next().done).toBe(true)
  })

  it('calls success with meta', () => {
    const generator = sagas.track('FOO', { gtm: 'bar' })
    expect(generator.next().value).toEqual({ event: 'FOO', label: 'bar' })
    expect(generator.next().done).toBe(true)
  })

  it('calls failure', () => {
    const generator = sagas.track('FOO')
    expect(generator.next().value).toEqual({ event: 'FOO' })
    expect(generator.throw('error').value)
      .toEqual(put(actions.gtmFailure('error', { event: 'FOO' })))
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
  const action = { type: 'FOO', meta: {} }
  const generator = sagas.watchAllActions()
  expect(generator.next().value).toEqual(take('*'))
  expect(generator.next(action).value).toEqual(call(sagas.track, 'FOO', {}))
})

test('watchGTMStart', () => {
  const payload = { gtmId: 'foo' }
  const generator = sagas.watchGTMStart()
  expect(generator.next().value).toEqual(take(actions.GTM_START))
  expect(generator.next({ payload }).value).toEqual(all([
    call(sagas.startGTM, payload),
    call(sagas.watchAllActions),
  ]))
})

test('saga', () => {
  const generator = saga()
  expect(generator.next().value).toEqual(fork(sagas.watchGTMStart))
})
