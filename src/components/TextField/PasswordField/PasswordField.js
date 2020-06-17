import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  FormHelperText,
  IconButton,
  InputAdornment,
  InputBase,
  InputLabel,
  ThemeProvider,
} from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

import style, { theme } from './PasswordField.style'

const PasswordField = ({
  id,
  label,
  error,
  helperText,
  visibilityButtonAriaLabel,
  onChange,
  ...props
}) => {
  const [isPasswordVisible, togglePasswordVisibility] = useState(false)

  const labelClasses = style.labelStyle()
  const inputClasses = style.inputStyle({ error })
  const inputAdornmentClasses = style.inputAdornmentStyle()
  const iconButtonClasses = style.iconButtonStyle()
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
        type={isPasswordVisible ? 'text' : 'password'}
        error={error}
        onChange={onChange}
        fullWidth
        endAdornment={(
          <InputAdornment classes={inputAdornmentClasses}>
            <IconButton
              aria-label={visibilityButtonAriaLabel}
              classes={iconButtonClasses}
              onClick={() => togglePasswordVisibility(!isPasswordVisible)}
            >
              {isPasswordVisible ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        )}
        {...props}
      />
      <FormHelperText id={`${id}-helper-text`} classes={helperTextClasses} error={error}>
        {helperText}
      </FormHelperText>
    </ThemeProvider>
  )
}

PasswordField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  visibilityButtonAriaLabel: PropTypes.string,
}

PasswordField.defaultProps = {
  error: false,
  helperText: '',
  visibilityButtonAriaLabel: 'toggle password visibility',
}

export default PasswordField
