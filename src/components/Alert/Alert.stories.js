import React from 'react'
import { action } from '@storybook/addon-actions'

import Alert from './Alert'

export default {
  title: 'Design System/components/Notification/Alert',
  component: Alert,
}

const WrapperAlert = ({ children }) => {
  return (
    <div style={{ width: '40%' }}>{children}</div>
  )
}

export const AlertAll = () => (
  <WrapperAlert>
    <div style={{ padding: '10px' }}>
      <Alert title='Notification Info!' type='info' message='This is a info alert — check it out!' onDismiss={action('Dismissed')} />
    </div>
    <div style={{ padding: '10px' }}>
      <Alert title='Notification Success!' type='success' message='This is a success alert — check it out!' onDismiss={action('Dismissed')} />
    </div>
    <div style={{ padding: '10px' }}>
      <Alert title='Notification Error!' type='error' message='This is a error alert — check it out!' onDismiss={action('Dismissed')} />
    </div>
    <div style={{ padding: '10px' }}>
      <Alert title='Notification Warning!' type='warning' message='This is a warning alert — check it out!' onDismiss={action('Dismissed')} />
    </div>
  </WrapperAlert>
)

export const AlertInfo = () => (
  <WrapperAlert>
    <Alert title='Notification Info!' type='info' message='This is a info alert — check it out!' onDismiss={action('Dismissed')} />
  </WrapperAlert>
)

export const AlertSuccess = () => (
  <WrapperAlert>
    <Alert title='Notification Success!' type='success' message='This is a success alert — check it out!' onDismiss={action('Dismissed')} />
  </WrapperAlert>
)

export const AlertError = () => (
  <WrapperAlert>
    <Alert title='Notification Error!' type='error' message='This is a error alert — check it out!' onDismiss={action('Dismissed')} />
  </WrapperAlert>
)

export const AlertWarning = () => (
  <WrapperAlert>
    <Alert title='Notification Warning!' type='warning' message='This is a warning alert — check it out!' onDismiss={action('Dismissed')} />
  </WrapperAlert>
)

export const AlertFixed = () => (
  <WrapperAlert>
    <Alert title='Notification Warning!' type='info' message='This is a info alert — check it out!' onDismiss={action('Dismissed')} fixed />
  </WrapperAlert>
)