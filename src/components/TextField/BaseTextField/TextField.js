import React from 'react'
import PropTypes from 'prop-types'
import {
  FormHelperText,
  InputBase,
  InputLabel,
  ThemeProvider,
} from '@material-ui/core'

import CustomNumberFormat from '../CustomNumberFormatInput'
import TooltipAdornment from '../TooltipAdornment'

import style, { theme } from './TextField.style'

const TextField = ({
  error,
  helperText,
  id,
  label,
  onChange,
  maskOptions,
  tooltipMessage,
  tooltipButtonAriaLabel,
  ...props
}) => {
  const labelClasses = style.labelStyle()
  const inputClasses = style.inputStyle({ error, tooltipMessage })
  const helperTextClasses = style.helperTextStyle()

  return (
    <ThemeProvider theme={theme}>
      <InputLabel htmlFor={id} classes={labelClasses}>
        {label}
      </InputLabel>
      <InputBase
        id={id}
        aria-describedby={`${id}-helper-text`}
        classes={inputClasses}
        error={error}
        onChange={onChange}
        inputComponent={maskOptions
          ? CustomNumberFormat
          : 'input'}
        inputProps={{ ...props, ...maskOptions }}
        endAdornment={tooltipMessage && (
          <TooltipAdornment message={tooltipMessage} buttonAriaLabel={tooltipButtonAriaLabel} />
        )}
        fullWidth
        {...props}
      />
      <FormHelperText id={`${id}-helper-text`} classes={helperTextClasses} error={error}>
        {helperText}
      </FormHelperText>
    </ThemeProvider>
  )
}

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  tooltipMessage: PropTypes.string,
  tooltipButtonAriaLabel: PropTypes.string,
  // The maskOptions prop could receive all props listed in https://github.com/s-yadav/react-number-format#props
  // It's not worth duplicating everything as a propType
  // eslint-disable-next-line react/forbid-prop-types
  maskOptions: PropTypes.object,
}

TextField.defaultProps = {
  error: false,
  helperText: '',
  maskOptions: null,
  tooltipMessage: null,
  tooltipButtonAriaLabel: 'show field\'s extra information',
}

export default TextField
