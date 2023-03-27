import { FC } from 'react'
import { closeSidebarSelector, useSidebarStore } from '@app/store/sidebarStore'
import { NavLink } from '@shared/components/NavLink'
import { H4 } from '@shared/components/Text'
import styles from './Navbar.module.css'

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = () => {
  const closeSidebar = useSidebarStore(closeSidebarSelector)

  return (
    <div className={styles.Navbar}>
      <H4 className={styles.Title}>Navigation</H4>

      <div className={styles.Links}>
        <NavLink 
          className={styles.Link} 
          onClick={closeSidebar} 
          to='/'
        >
          Home
        </NavLink>

        <NavLink 
          className={styles.Link} 
          onClick={closeSidebar} 
          to='/projects'
        >
          Projects
        </NavLink>
      </div>
    </div>
  )
}