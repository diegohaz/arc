import React from 'react'
import { storiesOf } from '@storybook/react'
import { FeatureList } from 'components'

storiesOf('FeatureList', module)
  .add('default', () => (
    <FeatureList />
  ))
