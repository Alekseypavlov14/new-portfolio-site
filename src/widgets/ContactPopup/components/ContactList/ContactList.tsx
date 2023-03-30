import { FC } from 'react'
import { useContacts } from '@entities/contacts'
import { Anchor } from '@shared/components/Anchor'
import { H3 } from '@shared/components/Text'
import styles from './ContactList.module.css'

interface ContactListProps {}

export const ContactList: FC<ContactListProps> = () => {
  const { contacts, isError, isLoading } = useContacts()

  if (isError) return (
    <div className={styles.ContactList}>
      Error...
    </div>
  )

  if (isLoading) return (
    <div className={styles.ContactList}>
      Loading...
    </div>
  )

  return (
    <div className={styles.ContactList}>
      <div className={styles.Links}>
        {contacts.map(contact => (
          <Anchor 
            className={styles.ContactLabel} 
            href={contact.href}
            key={contact.id}
          >
            <H3>{contact.label}</H3>
          </Anchor>
        ))}
      </div>
    </div>
  )
}