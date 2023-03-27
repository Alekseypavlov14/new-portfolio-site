import { FC } from 'react'
import { NavLink } from '@shared/components/NavLink'
import styles from './Navbar.module.css'

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = () => {
  return (
    <nav className={styles.Navbar}>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/projects'>Projects</NavLink>
    </nav>
  )
}