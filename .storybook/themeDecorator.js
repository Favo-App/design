import React from "react"
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider, makeStyles } from '@material-ui/core/styles'
import { theme } from '../src/shared/theme'

const useStyles = makeStyles({
  root: {
    'width': '100vw',
    'display': 'flex',
    'flexDirection': 'column',
    'margin': '0 auto',
    'justifyContent': 'center',
    'height': '100vh',
    'padding': '20px'
  },
})

const ThemeDecorator = storyFn => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {storyFn()}
      </ThemeProvider>
    </div>
  )
}

export default ThemeDecorator
