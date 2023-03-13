import { FC, ReactNode } from 'react'
import { H6 } from '@shared/components/Text'
import styles from './Badge.module.css'

interface BadgeProps {
  children: ReactNode
}

export const Badge: FC<BadgeProps> = ({ children }) => {
  return (
    <H6 className={styles.Badge}>
      {children}
    </H6>
  )
}