import { FC, ReactNode } from 'react'
import styles from './H4.module.css'
import cn from 'clsx'

interface H4Props {
  children: ReactNode
  className?: string
}

export const H4: FC<H4Props> = ({ children, className }) => {
  const classNames = cn(styles.H4, className)

  return (
    <h4 className={classNames}>
      {children}
    </h4>
  )
}
