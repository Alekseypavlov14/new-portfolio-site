import { FC, ReactNode } from 'react'
import styles from './H3.module.css'
import cn from 'clsx'

interface H3Props {
  children: ReactNode
  className?: string
}

export const H3: FC<H3Props> = ({ children, className }) => {
  const classNames = cn(styles.H3, className)

  return (
    <h3 className={classNames}>
      {children}
    </h3>
  )
}
