import { FC, ReactNode } from 'react'
import styles from './H6.module.css'
import cn from 'clsx'

interface H6Props {
  children: ReactNode
  className?: string
}

export const H6: FC<H6Props> = ({ children, className }) => {
  const classNames = cn(styles.H6, className)

  return (
    <h6 className={classNames}>
      {children}
    </h6>
  )
}
