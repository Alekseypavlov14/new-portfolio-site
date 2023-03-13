import { FC } from 'react'
import { SectionTitle } from './components/SectionTitle'
import { SectionRows } from './components/SectionRows'
import { PhoneNumber } from './components/PhoneNumber'
import { ContactLink } from './components/ContactLink'
import { Container } from '@shared/components/Container'
import { Sections } from './components/Sections'
import { NavLink } from '@shared/components/NavLink'
import { Section } from './components/Section'
import { Logo } from '@shared/components/Logo'
import styles from './Footer.module.css'

interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
  return (
    <footer className={styles.Footer}>
      <Container className={styles.Container}>
        <Logo />

        <Sections>
          <Section>
            <SectionTitle>Navigation</SectionTitle>

            <SectionRows>
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/projects'>Projects</NavLink>
              <NavLink to='/contacts'>Contacts</NavLink>
            </SectionRows>
          </Section>
          <Section>
            <SectionTitle>Contacts</SectionTitle>

            <SectionRows>
              <ContactLink href='https://t.me/aleshapavlov14'>Telegram</ContactLink>
              <ContactLink href='mailto:aleshapavlov9@gmail.com'>Gmail</ContactLink>
              <ContactLink href='https://instagram.com/alio.sha13'>Instagram</ContactLink>
            </SectionRows>
          </Section>
        </Sections>

        <SectionRows>
          <PhoneNumber>+38 099 976 83 26</PhoneNumber>
          <PhoneNumber>+40 739 521 908</PhoneNumber>
        </SectionRows>
      </Container>
    </footer>
  )
}