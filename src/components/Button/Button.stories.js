import React from 'react'
import { action } from '@storybook/addon-actions'

import Button from './Button'

export default {
  title: 'Design System/components/Inputs/Button',
  component: Button,
}

export const Contained = () => (
  <Button variant='contained' color='primary' onClick={action('Pressed')}>
    Próximo
  </Button>
)

export const FullWidth = () => (
  <Button variant='contained' color='primary' onClick={action('Pressed')} fullWidth>
    Próximo
  </Button>
)

export const FullWidthDisabled = () => (
  <Button variant='contained' color='primary' onClick={action('Pressed')} fullWidth disabled>
    Próximo
  </Button>
)

export const ContainedDisabled = () => (
  <Button variant='contained' color='primary' onClick={action('Pressed')} disabled>
    Próximo
  </Button>
)

export const TextButton = () => (
  <Button color='primary' onClick={action('Pressed')}>
    Voltar ao mercado
  </Button>
)

export const TextButtonDisabled = () => (
  <Button color='primary' onClick={action('Pressed')} disabled>
    Voltar ao mercado
  </Button>
)
