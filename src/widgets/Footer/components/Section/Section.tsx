import { FC, ReactNode } from 'react'
import styles from './Section.module.css'

interface SectionProps {
  children: ReactNode
}

export const Section: FC<SectionProps> = ({ children }) => {
  return (
    <section className={styles.Section}>
      {children}
    </section>
  )
}