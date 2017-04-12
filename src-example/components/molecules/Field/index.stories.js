import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Field } from 'components'

storiesOf('Field', module)
  .add('default', () => (
    <Field name="field" />
  ))
  .add('with label', () => (
    <Field name="field" label="Label" />
  ))
  .add('invalid', () => (
    <Field name="field" label="Label" invalid />
  ))
  .add('invalid with error message', () => (
    <Field name="field" label="Label" error="Invalid" invalid />
  ))
  .add('type textarea', () => (
    <Field name="field" label="Label" type="textarea" />
  ))
  .add('type select', () => (
    <Field name="field" label="Label" type="select" />
  ))
  .add('type checkbox', () => (
    <Field name="field" label="Label" type="checkbox" />
  ))
  .add('type radio', () => (
    <Field name="field" label="Label" type="radio" />
  ))
  .add('type radio invalid with error message', () => (
    <Field name="field" label="Label" type="radio" error="Invalid" invalid />
  ))
