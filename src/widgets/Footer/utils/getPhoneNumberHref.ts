import { formatPhoneNumber } from './formatPhoneNumber'

export function getPhoneNumberHref(phoneNumber: string) {
  const formattedPhoneNumber = formatPhoneNumber(phoneNumber)
  return `tel:${formattedPhoneNumber}`
}