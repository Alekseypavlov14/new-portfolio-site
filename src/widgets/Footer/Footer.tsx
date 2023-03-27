import { FC } from 'react'
import { ContactLinks } from './components/ContactLinks'
import { PhoneNumbers } from './components/PhoneNumbers'
import { SectionTitle } from './components/SectionTitle'
import { SectionRows } from './components/SectionRows'
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
            </SectionRows>
          </Section>

          <Section>
            <SectionTitle>Contacts</SectionTitle>
            <ContactLinks />
          </Section>
        </Sections>

        <PhoneNumbers />
      </Container>
    </footer>
  )
}