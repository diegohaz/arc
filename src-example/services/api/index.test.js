import api, { checkStatus, parseJSON, parseSettings, parseEndpoint } from '.'

jest.mock('config', () => ({
  apiUrl: 'https://api.foo.com',
}))

describe('checkStatus', () => {
  it('returns response when it is ok', () => {
    const response = { ok: true }
    expect(checkStatus(response)).toBe(response)
  })

  it('throws when it is not ok', () => {
    const response = { ok: false }
    expect(() => checkStatus(response)).toThrow()
  })
})

describe('parseJSON', () => {
  it('calls response.json', () => {
    const response = {
      json: jest.fn(() => 'foo'),
    }
    expect(parseJSON(response)).toBe('foo')
  })
})

describe('parseSettings', () => {
  it('has method get by default', () => {
    expect(parseSettings().method).toBe('get')
  })

  it('has normal body', () => {
    expect(parseSettings({ body: 'foo' }).body).toBe('foo')
  })

  it('has data body', () => {
    expect(parseSettings({ data: { foo: 'bar' } }).body)
      .toBe(JSON.stringify({ foo: 'bar' }))
  })

  it('has passed method', () => {
    expect(parseSettings({ method: 'post' }).method).toBe('post')
  })

  it('merges headers', () => {
    const otherSettings = { headers: { foo: 'bar' } }
    const settings = parseSettings(otherSettings)
    expect(settings).toHaveProperty('headers.foo', 'bar')
    expect(Object.keys(settings.headers).length)
      .toBeGreaterThan(Object.keys(otherSettings.headers).length)
  })
})

describe('parseEndpoint', () => {
  it('appends endpoint to apiUrl', () => {
    expect(parseEndpoint('/foo')).toBe('https://api.foo.com/foo')
  })

  it('parses params', () => {
    expect(parseEndpoint('/foo', { bar: 'baz' })).toBe('https://api.foo.com/foo?bar=baz')
  })

  it('parses url other than apiUrl', () => {
    expect(parseEndpoint('https://foo.bar/baz')).toBe('https://foo.bar/baz')
  })
})

describe('api', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() => Promise.resolve({
      ok: true,
      json: jest.fn(),
    }))
  })

  test('request', async () => {
    expect(global.fetch).not.toBeCalled()
    await api.request('/foo')
    expect(global.fetch).toHaveBeenCalledWith(
      'https://api.foo.com/foo',
      expect.objectContaining({
        method: 'get',
      })
    )
  })

  ;['delete', 'get', 'post', 'put', 'patch'].forEach((method) => {
    test(method, async () => {
      expect(global.fetch).not.toBeCalled()
      await api[method]('/foo')
      expect(global.fetch).toHaveBeenCalledWith(
        'https://api.foo.com/foo',
        expect.objectContaining({ method })
      )
    })
  })

  describe('create', () => {
    beforeEach(() => {
      api.request = jest.fn()
    })

    it('creates without arguments', () => {
      api.create()
    })

    it('has settings', () => {
      expect(api.create({ foo: 'bar' }).settings).toEqual({ foo: 'bar' })
    })

    test('setToken', () => {
      const obj = api.create({ headers: { foo: 'bar' } })
      obj.setToken('token')
      expect(obj.settings).toEqual({
        headers: {
          foo: 'bar',
          Authorization: 'Bearer token',
        },
      })
    })

    test('unsetToken', () => {
      const obj = api.create({
        headers: {
          foo: 'bar',
          Authorization: 'Bearer token',
        },
      })
      obj.unsetToken()
      expect(obj.settings).toEqual({ headers: { foo: 'bar' } })
    })

    test('request', () => {
      const obj = api.create({ foo: 'bar' })
      expect(api.request).not.toBeCalled()
      obj.request('/foo', { baz: 'qux' })
      expect(api.request).toHaveBeenCalledWith('/foo', {
        foo: 'bar',
        baz: 'qux',
      })
    })

    ;['get', 'delete'].forEach((method) => {
      test(method, () => {
        const obj = api.create({ foo: 'bar' })
        expect(api.request).not.toBeCalled()
        obj[method]('/foo', { baz: 'qux' })
        expect(api.request).toHaveBeenCalledWith('/foo', {
          foo: 'bar',
          baz: 'qux',
          method,
        })
      })
    })

    ;['post', 'put', 'patch'].forEach((method) => {
      test(method, () => {
        const obj = api.create({ foo: 'bar' })
        expect(api.request).not.toBeCalled()
        obj[method]('/foo', { field: 'value' }, { baz: 'qux' })
        expect(api.request).toHaveBeenCalledWith('/foo', {
          foo: 'bar',
          baz: 'qux',
          data: {
            field: 'value',
          },
          method,
        })
      })
    })
  })
})
