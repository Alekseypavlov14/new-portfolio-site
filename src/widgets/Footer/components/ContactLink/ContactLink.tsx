import { FC, ReactNode } from 'react'
import { Anchor } from '@shared/components/Anchor'
import { H6 } from '@shared/components/Text'
import styles from './ContactLink.module.css'

interface ContactLinkProps {
  children: ReactNode
  href: string
}

export const ContactLink: FC<ContactLinkProps> = ({ children, href }) => {
  return (
    <Anchor className={styles.ContactLink} href={href}>
      <H6>{children}</H6>
    </Anchor>
  )
}