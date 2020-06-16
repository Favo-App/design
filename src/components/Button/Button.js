import React from 'react'
import PropTypes from 'prop-types'
import { Button as ButtonMUI } from '@material-ui/core'
import useStyles from './Button.style'

const Button = ({ children, ...props }) => {
 const classes = useStyles()

 return (
    <ButtonMUI classes={classes} {...props}>
      {children}
    </ButtonMUI>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Button
