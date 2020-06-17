import { createMuiTheme, makeStyles } from '@material-ui/core/styles'

// @TODO: refactor these rows as soon as the design system is ready
const labelTextColor = 'rgba(0, 0, 0, 0.85)'
const inputTextColor = 'rgba(0, 0, 0, 0.6)'
const inputBorderColor = '#DDDDDD'

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#52158C',
    },
    error: {
      main: '#F54B5E',
    },
    common: {
      white: '#FFFFFF',
    },
  },
})

const labelStyle = makeStyles({
  root: {
    color: labelTextColor,
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
})

const inputStyle = makeStyles({
  root: {
    color: inputTextColor,
  },
  input: {
    backgroundColor: theme.palette.common.white,
    borderColor: ({ error }) => (!error ? inputBorderColor : theme.palette.error.main),
    borderRadius: 8,
    borderStyle: 'solid',
    borderWidth: 1,
    fontSize: 14,
    paddingBottom: 16,
    paddingLeft: 8,
    paddingRight: 50,
    paddingTop: 16,
    position: 'relative',
  },
})

const inputAdornmentStyle = makeStyles({
  root: {
    position: 'absolute',
    right: 0,
  },
})

const iconButtonStyle = makeStyles({
  root: {
    '&:focus': {
      outline: 'none',
    },
  },
})

const helperTextStyle = makeStyles({
  root: {
    fontSize: 10,
    marginTop: 0,
  },
})

export default {
  labelStyle,
  inputStyle,
  inputAdornmentStyle,
  iconButtonStyle,
  helperTextStyle,
}
