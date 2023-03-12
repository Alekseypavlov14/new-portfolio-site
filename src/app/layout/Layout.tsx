import { FC } from 'react'
import { Header } from '@widgets/Header'
import { Outlet } from 'react-router-dom'
import { Footer } from '@widgets/Footer'
import styles from './Layout.module.css'

interface LayoutProps {}

export const Layout: FC<LayoutProps> = () => {
  return (
    <div className={styles.Layout}>
      <Header />

      <div className={styles.Main}>
        <Outlet />
      </div>

      <Footer />
    </div>
  )
}