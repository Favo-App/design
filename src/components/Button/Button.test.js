import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'

import Button from './Button'

describe('#Button', () => {
  test('should render a button', () => {
    const text = 'Favo Button'

    render(<Button>{text}</Button>)
    expect(screen.getByText(text)).toHaveTextContent(text)
  })

  test('should call onClick', () => {
    const onClick = jest.fn();
    const text = 'Favo Button'

    const { getByText } = render(<Button onClick={onClick}>{text}</Button>)

    fireEvent.click(getByText(text))

    expect(onClick).toHaveBeenCalled()
  })
})
