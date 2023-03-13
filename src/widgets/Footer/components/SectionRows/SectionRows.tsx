import { FC, ReactNode } from 'react'
import styles from './SectionRows.module.css'

interface SectionRowsProps {
  children: ReactNode
}

export const SectionRows: FC<SectionRowsProps> = ({ children }) => {
  return (
    <div className={styles.SectionRows}>
      {children}
    </div>
  )
}