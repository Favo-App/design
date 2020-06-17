import React from 'react'
import { render, screen } from '@testing-library/react'

import TextField from './TextField'

describe('TextField', () => {
  test('Should render a text field', () => {
    const label = 'Hello'
    const placeholder = 'World'

    render(<TextField id='9bdd' label={label} onChange={() => {}} placeholder={placeholder} />)
    expect(screen.getByText(label)).toHaveTextContent(label)
    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument()
  })
  test('Should render a helper text if there is an error in the text field', () => {
    const label = 'Hello World'
    const helperText = 'Sorry about that'

    render(<TextField id='9bdd' label={label} onChange={() => {}} helperText={helperText} />)
    expect(screen.getByText(helperText)).toBeInTheDocument(helperText)
  })
})
