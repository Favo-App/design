import React from 'react'
import PropTypes from 'prop-types'
import {
  FormHelperText,
  InputBase,
  InputLabel,
  ThemeProvider,
} from '@material-ui/core'
import { Autocomplete as AutocompleteMUI } from '@material-ui/lab'

import style, { theme } from './Autocomplete.style'

const Autocomplete = ({
  error,
  getOptionLabel,
  helperText,
  id,
  label,
  onChange,
  options,
  placeholder,
  ...props
}) => {
  const labelClasses = style.labelStyle()
  const inputClasses = style.inputStyle({ error })
  const helperTextClasses = style.helperTextStyle()

  return (
    <ThemeProvider theme={theme}>
      <InputLabel htmlFor={id} classes={labelClasses}>
        {label}
      </InputLabel>
      <AutocompleteMUI
        id={id}
        aria-describedby={`${id}-helper-text`}
        classes={inputClasses}
        onChange={onChange}
        options={options}
        getOptionLabel={getOptionLabel}
        renderInput={(params) => (
          <InputBase
            label={label}
            placeholder={placeholder}
            inputRef={params.InputProps.ref}
            endAdornment={params.InputProps.endAdornment}
            fullWidth
            {...params}
          />
        )}
        disableClearable
        fullWidth
        {...props}
      />
      <FormHelperText id={`${id}-helper-text`} classes={helperTextClasses} error={error}>
        {helperText}
      </FormHelperText>
    </ThemeProvider>
  )
}

Autocomplete.propTypes = {
  id: PropTypes.string.isRequired,
  getOptionLabel: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  options: PropTypes.array.isRequired,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  placeholder: PropTypes.string,
}

Autocomplete.defaultProps = {
  error: false,
  helperText: '',
  placeholder: '',
}

export default Autocomplete
