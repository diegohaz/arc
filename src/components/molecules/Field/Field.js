import React, { PropTypes } from 'react'
import Radium from 'radium'

import { colors, fonts, Label, Input } from 'components'

const Field = ({ style, error, name, invalid, label, type, ...props }) => {
  const inputProps = {
    id: name,
    type,
    invalid,
    'aria-describedby': `${name}Error`,
    ...props
  }
  return (
    <div style={[styles.base, style]}>
      {label && <Label htmlFor={inputProps.id}>{label}</Label>}
      <Input {...inputProps} />
      {invalid && error &&
        <div id={`${name}Error`} role="alert" style={styles.error}>{error}</div>
      }
    </div>
  )
}

Field.propTypes = {
  style: PropTypes.object,
  name: PropTypes.string.isRequired,
  invalid: PropTypes.bool,
  error: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string
}

Field.defaultProps = {
  type: 'text'
}

const styles = {
  base: {
    marginBottom: '1rem'
  },
  error: {
    fontFamily: fonts.primary,
    color: colors.danger[1],
    margin: '0.5rem 0 0'
  }
}

export default Radium(Field)
