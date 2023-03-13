import { FC, ReactNode } from 'react'
import { H4 } from '@shared/components/Text'
import styles from './SectionTitle.module.css'

interface SectionTitleProps {
  children: ReactNode
}

export const SectionTitle: FC<SectionTitleProps> = ({ children }) => {
  return (
    <H4 className={styles.SectionTitle}>
      {children}
    </H4>
  )
}