import { FC, ReactNode } from 'react'
import styles from './Badge.module.css'

interface BadgeProps {
  children: ReactNode
}

export const Badge: FC<BadgeProps> = ({ children }) => {
  return (
    <div className={styles.Badge}>
      {children}
    </div>
  )
}