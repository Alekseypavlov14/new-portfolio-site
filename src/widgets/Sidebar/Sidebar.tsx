import { FC } from 'react'
import { useSidebarStore, isOpenedSelector } from '@app/store/sidebarStore'
import { getClassNames } from '@shared/lib/getClassNames' 
import { Background } from './components/Background'
import { Container } from '@shared/components/Container'
import { Navbar } from './components/Navbar'
import styles from './Sidebar.module.css'

interface SidebarProps {}

export const Sidebar: FC<SidebarProps> = () => {
  const isSidebarOpened = useSidebarStore(isOpenedSelector)
  const classNames = getClassNames(styles.Sidebar, isSidebarOpened && styles.Opened)

  return (
    <>
      <div className={classNames}>
        <Container className={styles.Container}>
          <Navbar />
        </Container>
      </div>

      <Background />
    </>
  )
}