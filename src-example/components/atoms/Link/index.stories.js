import React from 'react'
import { storiesOf } from '@storybook/react'
import Link from '.'

storiesOf('Link', module)
  .add('default', () => (
    <Link href="https://github.com/diegohaz/arc">ARc repository</Link>
  ))
  .add('reverse', () => (
    <Link href="https://github.com/diegohaz/arc" reverse>ARc repository</Link>
  ))
  .add('another palette', () => (
    <Link href="https://github.com/diegohaz/arc" palette="secondary">ARc repository</Link>
  ))
