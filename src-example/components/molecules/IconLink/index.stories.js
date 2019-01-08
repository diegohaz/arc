import React from 'react'
import { storiesOf } from '@storybook/react'
import { IconLink } from 'components'

storiesOf('IconLink', module)
  .add('default', () => (
    <IconLink icon="close" href="#">Hello</IconLink>
  ))
  .add('right', () => (
    <IconLink icon="close" href="#" right>Hello</IconLink>
  ))
  .add('inside paragraph', () => (
    <p>
Consequat cupidatat id
      <IconLink icon="close" href="#">excepteur</IconLink>
      {' '}
ex nisi proident et sunt fugiat id pariatur.
    </p>
  ))
