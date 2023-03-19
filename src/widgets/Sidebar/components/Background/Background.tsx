import { FC } from 'react'
import { closeSidebarSelector, isOpenedSelector, useSidebarStore } from '@app/store/sidebarStore'
import styles from './Background.module.css'
import cn from 'clsx'

interface BackgroundProps {}

export const Background: FC<BackgroundProps> = () => {
  const isSidebarOpened = useSidebarStore(isOpenedSelector)
  const closeSidebar = useSidebarStore(closeSidebarSelector)

  const classNames = cn(styles.Background, isSidebarOpened && styles.Opened)

  return (
    <div 
      onClick={closeSidebar}
      className={classNames} 
    />
  )
}