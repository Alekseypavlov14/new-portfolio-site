import { FC } from 'react'
import { ContactButton } from './components/ContactButton'
import { BurgerButton } from './components/BurgerButton'
import { ContactPopup } from '@widgets/ContactPopup'
import { Container } from '@shared/components/Container'
import { Navbar } from './components/Navbar'
import { Logo } from '@shared/components/Logo'
import styles from './Header.module.css'

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <header className={styles.Header}>
      <Container className={styles.Container}>
        <Logo />
        <Navbar />
        <ContactButton />
        <BurgerButton />
        <ContactPopup />
      </Container>
    </header>
  )
}