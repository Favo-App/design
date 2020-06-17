import { makeStyles } from '@material-ui/core/styles'

const inputAdornment = makeStyles({
  root: {
    position: 'absolute',
    right: 0,
  },
})

const tooltip = makeStyles({
  tooltip: {
    maxWidth: 'none',
  },
  touch: {
    fontSize: 10,
  },
})

const iconButton = makeStyles({
  root: {
    '&:focus': {
      outline: 'none',
    },
  },
})

export default {
  inputAdornment,
  tooltip,
  iconButton,
}
