import React from 'react'
import { storiesOf } from '@storybook/react'
import TableRow from '.'

storiesOf('TableRow', module)
  .add('default', () => (
    <table>
      <thead>
        <TableRow>
          <th>Heading Cell 1</th>
          <th>Heading Cell 2</th>
          <th>Heading Cell 3</th>
        </TableRow>
      </thead>
      <tbody>
        <TableRow filled>
          <td>Cell 1</td>
          <td>Cell 2</td>
          <td>Cell 3</td>
        </TableRow>
        <TableRow>
          <td>Cell 1</td>
          <td>Cell 2</td>
          <td>Cell 3</td>
        </TableRow>
      </tbody>
    </table>
  ))
