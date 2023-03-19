import { useMemo } from 'react'
import { getPhoneNumberHref } from '../utils/getPhoneNumberHref'

export function usePhoneNumberHref(phoneNumber: string) {
  return useMemo(() => getPhoneNumberHref(phoneNumber), [phoneNumber])
}