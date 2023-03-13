import { FC, ReactNode } from 'react'
import { H6 } from '@shared/components/Text'
import styles from './ContactLink.module.css'

interface ContactLinkProps {
  children: ReactNode
  href: string
}

export const ContactLink: FC<ContactLinkProps> = ({ children, href }) => {
  return (
    <a 
      className={styles.ContactLink}
      target='_blank'
      href={href}
    >
      <H6>{children}</H6>
    </a>
  )
}