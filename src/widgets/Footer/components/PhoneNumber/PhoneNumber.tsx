import { FC, ReactNode } from 'react'
import { H6 } from '@shared/components/Text'
import styles from './PhoneNumber.module.css'

interface PhoneNumberProps {
  children: ReactNode
}

export const PhoneNumber: FC<PhoneNumberProps> = ({ children }) => {
  function callHandler() {}

  return (
    <div 
      className={styles.PhoneNumber}
      onClick={callHandler}
    >
      <H6>{children}</H6>
    </div>
  )
}