import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { colors, fonts } from 'components/globals'
import { Label, Input } from 'components'

const Error = styled.div`
  font-family: ${fonts.primary};
  color: ${colors.danger[1]};
  margin: 0.5rem 0 0;
`

const Field = styled(({ error, name, invalid, label, type, className, ...props }) => {
  const inputProps = { id: name, type, invalid, 'aria-describedby': `${name}Error`, ...props }
  return (
    <div className={className}>
      {label && <Label htmlFor={inputProps.id}>{label}</Label>}
      <Input {...inputProps} />
      {invalid && error &&
        <Error id={`${name}Error`} role="alert">{error}</Error>
      }
    </div>
  )
})`
  marginBottom: 1rem;
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
