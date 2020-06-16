import React from 'react'
import PropTypes from 'prop-types'
import { Alert as MUIAlert, AlertTitle as MUIAlertTitle } from '@material-ui/lab'
import useStyles from './Alert.style'

const Alert  = ({
  fixed,
  message,
  title,
  type,
  onDismiss
}) => {
  const classes = useStyles({ fixed, message })

  return (
    <MUIAlert className={classes.alertContainer} severity={type} icon={false} variant='filled' onClose={onDismiss}>
      {title && <MUIAlertTitle className={classes.alertTitle}>{title}</MUIAlertTitle>}
      {message}
    </MUIAlert>
  )
}

NotificationAlert.propTypes = {
  onDismiss: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  fixed: PropTypes.bool,
  message: PropTypes.string,
  type: PropTypes.oneOf(['error', 'info', 'success', 'warning']),
}

NotificationAlert.defaultProps = {
  fixed: false,
  message: '',
  type: 'success',
}

export default Alert
