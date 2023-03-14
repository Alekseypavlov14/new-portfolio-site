import { FC, ReactNode } from 'react'
import styles from './Title.module.css'

interface TitleProps {
  children: ReactNode
}

export const Title: FC<TitleProps> = ({ children }) => {
  return (
    <div className={styles.Title}>
      {children}
    </div>
  )
}