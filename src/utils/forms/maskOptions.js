import { COUNTRIES, CURRENCIES, DOCUMENTS } from '../constants'

export const MASK_TYPE = {
  money: 'money',
  document: 'document',
  phoneNumber: 'phone number',
}

const money = {
  [CURRENCIES.BRL]: {
    decimalSeparator: ',',
    thousandSeparator: '.',
    isNumericString: true,
    prefix: 'R$ ',
    decimalScale: 2,
    fixedDecimalScale: true,
  },
  [CURRENCIES.PEN]: {
    isNumericString: true,
    prefix: 'S/ ',
    decimalScale: 2,
    fixedDecimalScale: true,
  },
  [CURRENCIES.USD]: {
    isNumericString: true,
    prefix: '$ ',
    decimalScale: 2,
    fixedDecimalScale: true,
  },
}

const documentType = {
  [DOCUMENTS.CPF]: {
    isNumericString: true,
    format: '###.###.###-##',
  },
}

const phoneNumber = {
  [COUNTRIES.BR]: {
    isNumericString: true,
    format: '(##) #####-####',
  },
}

export const maskOptions = ({
  type,
  currency,
  document,
  country,
}) => {
  if (type === MASK_TYPE.money && Object.values(CURRENCIES).includes(currency)) {
    return money[currency]
  }

  if (type === MASK_TYPE.document && Object.values(DOCUMENTS).includes(document)) {
    return documentType[document]
  }

  if (type === MASK_TYPE.phoneNumber && Object.values(COUNTRIES).includes(country)) {
    return phoneNumber[country]
  }

  return {}
}
