import { FC } from 'react'
import { useNavigation } from '@app/navigation'
import { Button } from '@shared/components/Button'
import styles from './ContactButton.module.css'

interface ContactButtonProps {}

export const ContactButton: FC<ContactButtonProps> = () => {
  const { navigateContactsPage } = useNavigation()

  return (
    <Button 
      className={styles.ContactButton}
      onClick={navigateContactsPage}
    >
      Contact me
    </Button>
  )
}