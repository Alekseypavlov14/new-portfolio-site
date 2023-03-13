import { FC, ReactNode } from 'react'
import styles from './H2.module.css'
import cn from 'clsx'

interface H2Props {
  children: ReactNode
  className?: string
}

export const H2: FC<H2Props> = ({ children, className }) => {
  const classNames = cn(styles.H2, className)

  return (
    <h2 className={classNames}>
      {children}
    </h2>
  )
}