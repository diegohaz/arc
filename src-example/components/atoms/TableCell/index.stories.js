import React from 'react'
import { storiesOf } from '@storybook/react'
import TableCell from '.'

storiesOf('TableCell', module)
  .add('default', () => (
    <table>
      <thead>
        <tr>
          <TableCell heading>Heading Cell 1</TableCell>
          <TableCell heading>Heading Cell 2</TableCell>
          <TableCell heading>Heading Cell 3</TableCell>
        </tr>
      </thead>
      <tbody>
        <tr>
          <TableCell>Cell 1</TableCell>
          <TableCell>Cell 2</TableCell>
          <TableCell>Cell 3</TableCell>
        </tr>
      </tbody>
    </table>
  ))
