import { FC } from 'react'
import { usePhoneNumberHref } from './../../hooks/usePhoneNumberHref'
import { H6 } from '@shared/components/Text'
import styles from './PhoneNumber.module.css'

interface PhoneNumberProps {
  tel: string
}

export const PhoneNumber: FC<PhoneNumberProps> = ({ tel }) => {
  const href = usePhoneNumberHref(tel)

  return (
    <a 
      className={styles.PhoneNumber}
      href={href}
    >
      <H6>{tel}</H6>
    </a>
  )
}