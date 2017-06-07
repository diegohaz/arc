import React from 'react'
import { shallow } from 'enzyme'
import NotFoundPage from '.'

it('renders', () => {
  shallow(<NotFoundPage />)
})

it('sets context status', () => {
  const context = {}
  shallow(<NotFoundPage staticContext={context} />)
  expect(context.status).toBe(404)
})
