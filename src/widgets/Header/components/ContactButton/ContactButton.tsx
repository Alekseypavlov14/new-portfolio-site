import { FC } from 'react'
import { openPopupSelector } from '@shared/components/Popup'
import { useContactPopupStore } from '@widgets/ContactPopup'
import { Button } from '@shared/components/Button'
import styles from './ContactButton.module.css'

interface ContactButtonProps {}

export const ContactButton: FC<ContactButtonProps> = () => {
  const openPopup = useContactPopupStore(openPopupSelector)

  return (
    <Button 
      className={styles.ContactButton}
      onClick={openPopup}
    >
      Contact me
    </Button>
  )
}