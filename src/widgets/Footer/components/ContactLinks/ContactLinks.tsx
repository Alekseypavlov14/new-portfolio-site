import { FC } from 'react'
import { useContacts } from '@entities/contacts'
import { ContactLink } from '../ContactLink/ContactLink'
import { SectionRows } from '../SectionRows'

interface ContactLinksProps {}

export const ContactLinks: FC<ContactLinksProps> = () => {
  const { data: contacts, isLoading, isError } = useContacts()

  if (!contacts || isLoading) return (
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
      {contacts.map(contact => (
        <ContactLink 
          href={contact.href} 
          key={contact.id}
        >
          {contact.label}
        </ContactLink>
      ))}
    </SectionRows>
  )
}