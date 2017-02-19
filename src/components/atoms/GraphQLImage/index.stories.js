import React from 'react'
import { storiesOf } from '@kadira/storybook'
import GraphQLImage from '.'

storiesOf('GraphQLImage', module)
  .add('default', () => (
    <GraphQLImage width={200} />
  ))
