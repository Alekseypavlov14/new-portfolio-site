import { FC } from 'react'
import { Sidebar } from '@widgets/Sidebar'
import { Header } from '@widgets/Header'
import { Outlet } from 'react-router-dom'
import { Footer } from '@widgets/Footer'
import styles from './Layout.module.css'

interface LayoutProps {}

export const Layout: FC<LayoutProps> = () => {
  return (
    <div className={styles.Layout}>
      <Header />
      <Sidebar />

      <main className={styles.Main}>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}