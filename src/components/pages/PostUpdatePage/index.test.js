import React from 'react'
import { shallow } from 'enzyme'
import PostUpdatePage from '.'

it('renders', () => {
  shallow(<PostUpdatePage id={1} />)
})
