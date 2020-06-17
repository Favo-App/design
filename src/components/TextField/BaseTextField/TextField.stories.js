import React from 'react'
import { action } from '@storybook/addon-actions'

import {
  maskOptions,
  COUNTRIES,
  DOCUMENTS,
  MASK_TYPE,
} from '../../../utils'

import TextField from './TextField'

export default {
  title: 'Design System/components/Inputs/TextField',
  component: TextField,
}

export const DefaultTextField = () => (
  <TextField
    id='9b1deb4d'
    label='Nome Completo'
    placeholder='Joaquim José da Silva Xavier'
    onChange={action('Changed')}
  />
)

export const TextFieldWithError = () => (
  <TextField
    id='ab8dfbbd4bed'
    label='CPF'
    placeholder='123.456.789-00'
    onChange={action('Changed')}
    defaultValue='706.322.856-05'
    helperText='CPF já cadastrado'
    error
  />
)

export const FormattedPhoneNumberValue = () => (
  <TextField
    id='9b1deb4d'
    label='Celular'
    placeholder='(79) 12345-6789'
    onChange={action('Changed')}
    maskOptions={maskOptions({ type: MASK_TYPE.phoneNumber, country: COUNTRIES.BR })}
  />
)

export const FormattedCPFValue = () => (
  <TextField
    id='9b1deb4d'
    label='CPF'
    placeholder='123.456.789-00'
    onChange={action('Changed')}
    maskOptions={maskOptions({ type: MASK_TYPE.document, document: DOCUMENTS.CPF })}
  />
)

export const FormattedCPFWithInitialValue = () => (
  <TextField
    id='9b1deb4d'
    label='CPF'
    placeholder='123.456.789-00'
    defaultValue='70632285605'
    onChange={action('Changed')}
    maskOptions={maskOptions({ type: MASK_TYPE.document, document: DOCUMENTS.CPF })}
  />
)

export const withTooltip = () => (
  <TextField
    id='9b1deb4d'
    label='E-mail'
    placeholder='fulano@cicrano.com.br'
    onChange={action('Changed')}
    tooltipMessage='O e-mail é a segunda forma mais segura para identificarmos sua conta.'
  />
)

export const withTooltipAndMask = () => (
  <TextField
    id='9b1deb4d'
    label='CPF'
    placeholder='123.456.789-00'
    onChange={action('Changed')}
    tooltipMessage='O CPF é a forma mais segura para identificarmos sua conta.'
    maskOptions={maskOptions({ type: MASK_TYPE.document, document: DOCUMENTS.CPF })}
  />
)
