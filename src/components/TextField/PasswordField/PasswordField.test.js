import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import PasswordField from './PasswordField'

describe('PasswordField', () => {
  test('Should render a text field', () => {
    const label = 'Hello'
    const placeholder = 'World'

    render(<PasswordField id='9bdd' label={label} onChange={() => {}} placeholder={placeholder} />)
    expect(screen.getByText(label)).toHaveTextContent(label)
    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument()
  })
  test('Should render a helper text if there is an error in the text field', () => {
    const label = 'Hello World'
    const helperText = 'Sorry about that'

    render(<PasswordField id='9bdd' label={label} onChange={() => {}} helperText={helperText} />)
    expect(screen.getByText(helperText)).toBeInTheDocument()
  })
  test('Should either show or hide password depending on visibility button', () => {
    const label = 'Hello World'
    const password = '123456'
    const visibilityButtonAriaLabel = 'toggle password visibility'

    render(
      <PasswordField
        id='9bdd'
        label={label}
        onChange={() => {}}
        value={password}
        visibilityButtonAriaLabel={visibilityButtonAriaLabel}
      />,
    )
    expect(screen.getByDisplayValue(password)).toHaveAttribute('type', 'password')
    fireEvent.click(screen.getByLabelText(visibilityButtonAriaLabel))
    expect(screen.getByDisplayValue(password)).toHaveAttribute('type', 'text')
    fireEvent.click(screen.getByLabelText(visibilityButtonAriaLabel))
    expect(screen.getByDisplayValue(password)).toHaveAttribute('type', 'password')
  })
})
