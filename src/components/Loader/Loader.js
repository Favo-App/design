import React from 'react'
import PropTypes from 'prop-types'
import { CircularProgress, Grid } from '@material-ui/core'

const CenterWrapper = ({ children }) => (
  <Grid container justify='center'>
    <Grid item>
      {children}
    </Grid>
  </Grid>
)

CenterWrapper.propTypes = {
  children: PropTypes.element.isRequired,
}

const DefaultWrapper = ({ children }) => (
  <>
    {children}
  </>
)
DefaultWrapper.propTypes = {
  children: PropTypes.element.isRequired,
}

const Loader = ({ center, ...props }) => {
  const Wrapper = center ? CenterWrapper : DefaultWrapper

  return (
    <Wrapper>
      <CircularProgress {...props} />
    </Wrapper>
  )
}

Loader.propTypes = {
  center: PropTypes.bool,
}

Loader.defaultProps = {
  center: false,
}

export default Loader
