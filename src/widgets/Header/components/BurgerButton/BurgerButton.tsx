import { FC, useState } from 'react'
import { BurgerButton as DefaultBurgerButton } from 'standard-ui'
import styles from './BurgerButton.module.css'

interface BurgerButtonProps {}

export const BurgerButton: FC<BurgerButtonProps> = () => {
  const [isSidebarOpened, setSidebarOpened] = useState(false)

  const toggleSidebar = () => setSidebarOpened(value => !value)

  // TODO: create global state for menu
  
  return (
    <DefaultBurgerButton 
      className={styles.BurgerButton}
      isOpened={isSidebarOpened} 
      onClick={toggleSidebar} 
    />
  )
}