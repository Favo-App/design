import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    borderRadius: 3,
    '&:focus': {
      outline: 'none',
    },
  },
  contained: {
    height: 50,
  }
})

export default useStyles