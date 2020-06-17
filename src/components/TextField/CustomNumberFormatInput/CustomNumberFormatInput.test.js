import React from 'react'
import { render, screen } from '@testing-library/react'

import {
  maskOptions,
  COUNTRIES,
  CURRENCIES,
  DOCUMENTS,
  MASK_TYPE,
} from '../../../utils'

import CustomNumberFormat from './CustomNumberFormatInput'

describe('Custom Number Format Input', () => {
  test('Should render a field with CPF mask', () => {
    const rawValue = '12345678900'
    const maskProps = maskOptions({
      type: MASK_TYPE.document,
      document: DOCUMENTS.CPF,
    })
    const formattedValue = '123.456.789-00'

    render(
      <CustomNumberFormat id='9bdd' defaultValue={rawValue} onChange={() => {}} {...maskProps} />,
    )
    expect(screen.getByDisplayValue(formattedValue)).toBeInTheDocument()
  })
  test('Should render a field with BRL (currency) mask (defaultValue as number)', () => {
    const rawValue = 18.9
    const maskProps = maskOptions({
      type: MASK_TYPE.money,
      currency: CURRENCIES.BRL,
    })
    const formattedValue = 'R$ 18,90'

    render(
      <CustomNumberFormat id='9bdd' defaultValue={rawValue} onChange={() => {}} {...maskProps} />,
    )
    expect(screen.getByDisplayValue(formattedValue)).toBeInTheDocument()
  })
  test('Should render a field with BRL (currency) mask (defaultValue as string)', () => {
    const rawValue = '18.90'
    const maskProps = maskOptions({
      type: MASK_TYPE.money,
      currency: CURRENCIES.BRL,
    })
    const formattedValue = 'R$ 18,90'

    render(
      <CustomNumberFormat id='9bdd' defaultValue={rawValue} onChange={() => {}} {...maskProps} />,
    )
    expect(screen.getByDisplayValue(formattedValue)).toBeInTheDocument()
  })
  test('Should render a field with PEN (currency) mask', () => {
    const rawValue = '18.90'
    const maskProps = maskOptions({
      type: MASK_TYPE.money,
      currency: CURRENCIES.PEN,
    })
    const formattedValue = 'S/ 18.90'

    render(
      <CustomNumberFormat id='9bdd' defaultValue={rawValue} onChange={() => {}} {...maskProps} />,
    )
    expect(screen.getByDisplayValue(formattedValue)).toBeInTheDocument()
  })
  test("Should render a field with brazil's phone number mask ", () => {
    const rawValue = '79999990000'
    const maskProps = maskOptions({
      type: MASK_TYPE.phoneNumber,
      country: COUNTRIES.BR,
    })
    const formattedValue = '(79) 99999-0000'

    render(
      <CustomNumberFormat id='9bdd' defaultValue={rawValue} onChange={() => {}} {...maskProps} />,
    )
    expect(screen.getByDisplayValue(formattedValue)).toBeInTheDocument()
  })
})
