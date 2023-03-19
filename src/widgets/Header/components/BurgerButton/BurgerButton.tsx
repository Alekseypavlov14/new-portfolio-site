import { FC } from 'react'
import { closeSidebarSelector, isOpenedSelector, openSidebarSelector, useSidebarStore } from '@app/store/sidebarStore'
import { BurgerButton as DefaultBurgerButton } from 'standard-ui'
import styles from './BurgerButton.module.css'

interface BurgerButtonProps {}

export const BurgerButton: FC<BurgerButtonProps> = () => {
  const isSidebarOpened = useSidebarStore(isOpenedSelector)
  const openSidebar = useSidebarStore(openSidebarSelector)
  const closeSidebar = useSidebarStore(closeSidebarSelector)

  const toggleSidebar = () => isSidebarOpened ? closeSidebar() : openSidebar()

  return (
    <DefaultBurgerButton 
      className={styles.BurgerButton}
      isOpened={isSidebarOpened} 
      onClick={toggleSidebar} 
    />
  )
}