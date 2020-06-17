import { COUNTRIES, CURRENCIES } from '../constants'
import { maskOptions, MASK_TYPE } from './masks'

describe("Generate mask options to the 'react-number-format' lib", () => {
  test('Should return an empty object if no param is given', () => {
    const params = {}
    const result = {}
    expect(maskOptions(params)).toEqual(result)
  })
  test('Should return an empty object if incompatible params are given', () => {
    const params = {
      type: MASK_TYPE.money,
      country: COUNTRIES.BR,
    }
    const result = {}
    expect(maskOptions(params)).toEqual(result)
  })
  test('Should return an proper return for compatible given params', () => {
    const params = {
      type: MASK_TYPE.money,
      currency: CURRENCIES.BRL,
    }
    const result = {
      decimalSeparator: ',',
      thousandSeparator: '.',
      isNumericString: true,
      prefix: 'R$ ',
      decimalScale: 2,
      fixedDecimalScale: true,
    }
    expect(maskOptions(params)).toEqual(result)
  })
})
