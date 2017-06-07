import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { UserButton } from 'components'

storiesOf('UserButton', module)
  .add('default', () => (
    <UserButton onLogin={action('login')} onLogout={action('logout')} />
  ))
  .add('with user', () => (
    <UserButton
      user={{ picture: 'https://avatars3.githubusercontent.com/u/3068563?v=3&s=460' }}
      onLogin={action('login')}
      onLogout={action('logout')}
    />
  ))
