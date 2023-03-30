import { FC } from 'react'
import { usePhoneNumbers } from '@entities/phone-numbers'
import { PhoneNumber } from '../PhoneNumber/PhoneNumber'
import { SectionRows } from '../SectionRows'

interface PhoneNumbersProps {}

export const PhoneNumbers: FC<PhoneNumbersProps> = () => {
  const { phoneNumbers, isLoading, isError } = usePhoneNumbers()

  if (isLoading) return (
    <SectionRows>
      Loading ...
    </SectionRows>
  )

  if (isError) return (
    <SectionRows>
      Error ...
    </SectionRows>
  )

  return (
    <SectionRows>
      {phoneNumbers.map(phoneNumber => (
        <PhoneNumber 
          tel={phoneNumber.tel} 
          key={phoneNumber.id} 
        />
      ))}
    </SectionRows>
  )
}