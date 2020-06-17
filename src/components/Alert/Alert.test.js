import React from 'react'
import { render } from '@testing-library/react'

import Alert from './Alert'

describe('#Alert', () => {
  test('should render a notification alert', () => {
    const title = 'Notification Info!'
    const message = 'This is a info alert — check it out!'
  
    render(<Alert title={title} type='info' message={message} onDismiss={ () => {}} />)
  })
})