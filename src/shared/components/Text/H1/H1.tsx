import { FC, ReactNode } from 'react'
import styles from './H1.module.css'
import cn from 'clsx'

interface H1Props {
  children: ReactNode
  className?: string
}

export const H1: FC<H1Props> = ({ children, className }) => {
  const classNames = cn(styles.H1, className)

  return (
    <h1 className={classNames}>
      {children}
    </h1>
  )
}