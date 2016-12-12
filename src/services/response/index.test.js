import * as response from '.'

let res

beforeEach(() => {
  res = {
    status: jest.fn(() => res),
    json: jest.fn(() => res),
    end: jest.fn(() => res)
  }
})

describe('success', () => {
  it('responds with passed object and status 200', () => {
    expect(response.success(res)({ prop: 'value' })).toBeNull()
    expect(res.status).toBeCalledWith(200)
    expect(res.json).toBeCalledWith({ prop: 'value' })
  })

  it('responds with passed object and status 201', () => {
    expect(response.success(res, 201)({ prop: 'value' })).toBeNull()
    expect(res.status).toBeCalledWith(201)
    expect(res.json).toBeCalledWith({ prop: 'value' })
  })

  it('does not send any response when object has not been passed', () => {
    expect(response.success(res, 201)()).toBeNull()
    expect(res.status).not.toBeCalled()
  })
})

describe('notFound', () => {
  it('responds with status 404 when object has not been passed', () => {
    expect(response.notFound(res)()).toBeNull()
    expect(res.status).toBeCalledWith(404)
    expect(res.end).toHaveBeenCalledTimes(1)
  })

  it('returns the passed object and does not send any response', () => {
    expect(response.notFound(res)({ prop: 'value' })).toEqual({ prop: 'value' })
    expect(res.status).not.toBeCalled()
    expect(res.end).not.toBeCalled()
  })
})

describe('authorOrAdmin', () => {
  let user, entity

  beforeEach(() => {
    user = {
      id: 1,
      role: 'user'
    }
    entity = {
      author: {
        id: 1,
        equals (id) {
          return id === this.id
        }
      }
    }
  })

  it('returns the passed entity when author is the same', () => {
    expect(response.authorOrAdmin(res, user, 'author')(entity)).toEqual(entity)
  })

  it('returns the passed entity when author is admin', () => {
    user.role = 'admin'
    expect(response.authorOrAdmin(res, user, 'user')(entity)).toEqual(entity)
  })

  it('responds with status 401 when author is not the same or admin', () => {
    user.id = 2
    expect(response.authorOrAdmin(res, user, 'author')(entity)).toBeNull()
    expect(res.status).toBeCalledWith(401)
    expect(res.end).toHaveBeenCalledTimes(1)
  })

  it('returns null without sending response when entity has not been passed', () => {
    expect(response.authorOrAdmin(res, user, 'author')()).toBeNull()
  })
})
