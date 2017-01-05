import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { FeatureList } from 'components'

storiesOf('FeatureList', module)
  .add('default', () => (
    <FeatureList />
  ))
