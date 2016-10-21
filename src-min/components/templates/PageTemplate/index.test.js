import React from 'react'
import { mount } from 'enzyme'
import PageTemplate from '.'

it('mounts', () => {
  mount(<PageTemplate>test</PageTemplate>)
})
