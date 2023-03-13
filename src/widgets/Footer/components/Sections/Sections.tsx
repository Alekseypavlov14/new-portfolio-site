import { FC, ReactNode } from 'react'
import styles from './Sections.module.css'

interface SectionsProps {
  children: ReactNode
}

export const Sections: FC<SectionsProps> = ({ children }) => {
  return (
    <div className={styles.Sections}>
      {children}
    </div>
  )
}