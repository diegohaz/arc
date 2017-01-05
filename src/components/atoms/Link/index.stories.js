import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Link from '.'

storiesOf('Link', module)
  .add('default', () => (
    <Link href="https://github.com/diegohaz/arc">ARc repository</Link>
  ))
  .add('reverse', () => (
    <Link href="https://github.com/diegohaz/arc" reverse>ARc repository</Link>
  ))
  .add('another color', () => (
    <Link href="https://github.com/diegohaz/arc" color="secondary">ARc repository</Link>
  ))
