import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { colors, fonts, Label, Input } from 'components'

const Field = styled(({ error, name, invalid, label, type, className, ...props }) => {
  const inputProps = { id: name, type, invalid, 'aria-describedby': `${name}Error`, ...props }
  return (
    <div className={className}>
      {label && <Label htmlFor={inputProps.id}>{label}</Label>}
      <Input {...inputProps} />
      {invalid && error &&
        <div id={`${name}Error`} role="alert">{error}</div>
      }
    </div>
  )
})`
  marginBottom: 1rem;

  & *[id$=Error] {
    font-family: ${fonts.primary};
    color: ${colors.danger[1]};
    margin: 0.5rem 0 0;
  }
`

Field.propTypes = {
  name: PropTypes.string.isRequired,
  invalid: PropTypes.bool,
  error: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string
}

Field.defaultProps = {
  type: 'text'
}

export default Field
