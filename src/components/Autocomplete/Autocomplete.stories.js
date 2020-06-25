import React from 'react'
import { action } from '@storybook/addon-actions'

import Autocomplete from './Autocomplete'

const options = [
  { name: 'São Paulo', state: 'SP' },
  { name: 'Cotia', state: 'SP' },
  { name: 'Osasco', state: 'SP' },
  { name: 'Taboão da Serra', state: 'SP' },
]

export default {
  title: 'Design System/components/Inputs/AutoComplete',
  component: Autocomplete,
}

export const Default = () => (
  <Autocomplete
    id='9b1deb4d'
    label='Cidade'
    placeholder='Selecione uma cidade'
    onChange={action('Changed')}
    options={options}
    getOptionLabel={(option) => `${option.name}, ${option.state}`}
  />
)

export const withError = () => (
  <Autocomplete
    id='9b1deb4d'
    label='Cidade'
    placeholder='Selecione uma cidade'
    onChange={action('Changed')}
    options={options}
    getOptionLabel={(option) => `${option.name}, ${option.state}`}
    helperText='Por favor, selecione uma cidade'
    error
  />
)

export const withInitialValue = () => (
  <Autocomplete
    id='9b1deb4d'
    label='Cidade'
    placeholder='Selecione uma cidade'
    defaultValue={options[1]}
    onChange={action('Changed')}
    options={options}
    getOptionLabel={(option) => `${option.name}, ${option.state}`}
  />
)
