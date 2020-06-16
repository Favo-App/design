import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  alertContainer: {
    fontWeight: 'bold',
    textAlign: 'left',
    borderRadius: 0,
    margin: 0,
    position: ({ fixed }) => fixed && 'fixed',
    top: ({ fixed }) => fixed && 0,
    left: ({ fixed }) => fixed && 0,
    right: ({ fixed }) => fixed && 0,
    zIndex: ({ fixed }) => fixed && 10000
  },
  alertTitle: {
    fontSize: ({ message }) => (message ? 14 : 16),
    fontWeight: 'bold',
    margin: 0,
  }
})

export default useStyles