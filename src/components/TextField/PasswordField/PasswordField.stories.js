import React from 'react'
import { action } from '@storybook/addon-actions'

import PasswordField from './PasswordField'

export default {
  title: 'Design System/components/Inputs/PasswordField',
  component: PasswordField,
}

export const DefaultPasswordField = () => (
  <PasswordField
    id='9b1deb4d'
    label='Digite sua senha'
    placeholder='************'
    onChange={action('Changed')}
    visibilityButtonAriaLabel='altera a visibilidade da senha'
    helperComponent={
      <a href='#'>Hello</a>
    }
  />
)

export const PasswordFieldWithLongValue = () => (
  <PasswordField
    id='deb4d'
    label='Digite sua senha'
    placeholder='************'
    onChange={action('Changed')}
    defaultValue='1234567890123456789012345678901234567890'
  />
)

export const PasswordFieldWithError = () => (
  <PasswordField
    id='ab8dfbbd4bed'
    label='Confirme sua senha'
    placeholder='************'
    onChange={action('Changed')}
    defaultValue='123'
    helperText='Senha muito curta. Use 6 ou mais dígitos'
    error
  />
)
