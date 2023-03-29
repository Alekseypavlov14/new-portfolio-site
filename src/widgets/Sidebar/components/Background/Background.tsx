import { FC } from 'react'
import { closeSidebarSelector, isOpenedSelector, useSidebarStore } from '@app/store/sidebarStore'
import { getClassNames } from '@shared/lib/getClassNames' 
import styles from './Background.module.css'

interface BackgroundProps {}

export const Background: FC<BackgroundProps> = () => {
  const isSidebarOpened = useSidebarStore(isOpenedSelector)
  const closeSidebar = useSidebarStore(closeSidebarSelector)

  const classNames = getClassNames(styles.Background, isSidebarOpened && styles.Opened)

  return (
    <div 
      onClick={closeSidebar}
      className={classNames} 
    />
  )
}