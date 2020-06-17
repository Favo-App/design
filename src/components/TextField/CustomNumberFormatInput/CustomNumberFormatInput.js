import React from 'react'
import PropTypes from 'prop-types'
import NumberFormat from 'react-number-format'

const CustomNumberFormat = ({
  inputRef,
  name,
  onChange,
  ...props
}) => {
  const onValueChange = ({ value }) => {
    onChange({ target: { name, value } })
  }

  return (
    <NumberFormat
      getInputRef={inputRef}
      onValueChange={onValueChange}
      {...props}
    />
  )
}

CustomNumberFormat.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
}

CustomNumberFormat.defaultProps = {
  name: undefined,
}

export default CustomNumberFormat
