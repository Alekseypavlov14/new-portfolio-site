import { FC } from 'react'
import { Popup, closePopupSelector, isOpenedSelector, CloseButton } from '@shared/components/Popup'
import { useContactPopupStore } from './store'
import { ContactList } from './components/ContactList'
import { Decoration } from '@shared/components/Decoration'
import { H2 } from '@shared/components/Text'
import styles from './ContactPopup.module.css'

interface ContactPopupProps {}

export const ContactPopup: FC<ContactPopupProps> = () => {
  const isOpened = useContactPopupStore(isOpenedSelector)
  const closePopup = useContactPopupStore(closePopupSelector)

  return (
    <Popup 
      className={styles.ContactPopup}
      isOpened={isOpened} 
      onClose={closePopup}
    >
      <div className={styles.Header}>
        <H2>Contact me</H2>
        <CloseButton onClick={closePopup}/>
      </div>

      <ContactList />

      <Decoration className={styles.Decoration1} />
      <Decoration className={styles.Decoration2} />
      <Decoration className={styles.Decoration3} />
    </Popup>
  )
}