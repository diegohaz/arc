import React from 'react'
import { mount, shallow } from 'enzyme'
import TableRow from '.'

const wrap = (props = {}) => shallow(<TableRow {...props} />)

it('mounts with different combination of props', () => {
  const wrapMounted = ({ children, ...props }) => mount(
    <table>
      <tbody>
        <TableRow {...props}>
          {children && <td>{children}</td>}
        </TableRow>
      </tbody>
    </table>
  )
  wrapMounted({ children: 'test' })
  wrapMounted({ filled: true, children: 'test' })
})

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' }).length).toBeGreaterThan(0)
})
