import React, { PropTypes } from 'react'
import Radium from 'radium'

import { colors } from 'components'

const Input = ({ invalid, style, type, ...props }) => {
  const cx = [styles.base({ invalid, type }), style]
  if (type === 'textarea') {
    return <textarea {...props} style={cx} />
  }
  return <input {...props} style={cx} type={type} />
}

Input.propTypes = {
  style: PropTypes.object,
  invalid: PropTypes.bool,
  type: PropTypes.string
}

Input.defaultProps = {
  type: 'text'
}

const styles = {
  base: ({ invalid, type }) => ({
    display: 'block',
    width: '100%',
    color: 'inherit',
    margin: 0,
    boxSizing: 'border-box',
    fontSize: '1.125rem',
    border: `1px solid ${invalid ? colors.danger[2] : colors.grayscale[3]}`,
    borderRadius: 2,
    ...type !== 'textarea' && {
      height: '2.5rem'
    },
    ...(type === 'checkbox' || type === 'radio') && {
      display: 'inline-block',
      border: 0,
      borderRadius: 0,
      width: 'auto',
      height: 'auto',
      margin: '0 0.2rem 0 0'
    }
  })
}

export default Radium(Input)
