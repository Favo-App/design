import React from 'react'
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

export default Alert
