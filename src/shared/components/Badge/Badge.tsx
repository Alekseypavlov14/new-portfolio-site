import { FC, ReactNode } from 'react'
import { H6 } from '@shared/components/Text'
import styles from './Badge.module.css'
import cn from 'clsx'

interface BadgeProps {
  children: ReactNode
  className?: string
}

export const Badge: FC<BadgeProps> = ({ children, className }) => {
  const classNames = cn(styles.Badge, className)

  return (
    <H6 className={classNames}>
      {children}
    </H6>
  )
}