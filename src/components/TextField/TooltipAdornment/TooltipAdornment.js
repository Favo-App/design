import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  ClickAwayListener,
  IconButton,
  InputAdornment,
  Tooltip,
} from '@material-ui/core'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'

import style from './TooltipAdornment.style'

const TooltipAdornment = ({ buttonAriaLabel, message }) => {
  const [isVisible, setVisibility] = useState(false)

  const hideTooltip = () => setVisibility(false)
  const showTooltip = () => setVisibility(true)

  const adornmentClasses = style.inputAdornment()
  const tooltipClasses = style.tooltip()
  const iconButtonClasses = style.iconButton()

  return (
    <InputAdornment classes={adornmentClasses}>
      <ClickAwayListener onClickAway={hideTooltip}>
        <Tooltip
          classes={tooltipClasses}
          onClose={hideTooltip}
          open={isVisible}
          title={message}
          placement='top-end'
          disableFocusListener
          disableHoverListener
          disableTouchListener
          arrow
        >
          <IconButton
            aria-label={buttonAriaLabel}
            classes={iconButtonClasses}
            onClick={showTooltip}
          >
            <InfoOutlinedIcon />
          </IconButton>
        </Tooltip>
      </ClickAwayListener>
    </InputAdornment>
  )
}

TooltipAdornment.propTypes = {
  message: PropTypes.string.isRequired,
  buttonAriaLabel: PropTypes.string.isRequired,
}

export default TooltipAdornment
