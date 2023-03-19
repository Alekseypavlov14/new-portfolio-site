import { FC } from 'react'
import { usePhoneNumbers } from '@entities/phone-numbers'
import { PhoneNumber } from '../PhoneNumber/PhoneNumber'
import { SectionRows } from '../SectionRows'

interface PhoneNumbersProps {}

export const PhoneNumbers: FC<PhoneNumbersProps> = () => {
  const { data: phoneNumbers, isLoading, isError } = usePhoneNumbers()

  if (!phoneNumbers || isLoading) return (
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