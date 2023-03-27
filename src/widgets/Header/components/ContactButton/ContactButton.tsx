import { FC } from 'react'
import { Button } from '@shared/components/Button'
import styles from './ContactButton.module.css'

interface ContactButtonProps {}

export const ContactButton: FC<ContactButtonProps> = () => {
  return (
    <Button 
      className={styles.ContactButton}
      onClick={() => {}}
    >
      Contact me
    </Button>
  )
}