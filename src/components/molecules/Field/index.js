import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Label, Input, Block } from 'components'

const Error = styled(Block)`
  margin: 0.5rem 0 0;
`

const Wrapper = styled.div`
  margin-bottom: 1rem;
`

const Field = ({ error, name, invalid, label, type, ...props, theme }) => {
  const inputProps = { id: name, name, type, invalid, 'aria-describedby': `${name}Error`, ...props }
  return (
    <Wrapper>
      {label && <Label htmlFor={inputProps.id}>{label}</Label>}
      <Input {...inputProps} />
      {invalid && error &&
        <Error id={`${name}Error`} role="alert" color="danger" theme={theme}>{error}</Error>
      }
    </Wrapper>
  )
}

Field.propTypes = {
  name: PropTypes.string.isRequired,
  invalid: PropTypes.bool,
  error: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  theme: PropTypes.object
}

Field.defaultProps = {
  type: 'text',
  theme: {
    fonts: {
      primary: 'sans-serif'
    },
    colors: {
      danger: { 1: '#f44336', 2: '#f8877f' },
      grayscale: { 0: '#222', 3: '#bbb' }
    },
    reverseColors: {
      danger: { 1: '#f8877f', 2: '#f44336' },
      grayscale: { 0: '#fff', 3: '#555' }
    }
  }
}

export default Field
