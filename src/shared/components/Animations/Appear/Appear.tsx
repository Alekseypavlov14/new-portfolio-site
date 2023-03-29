import { FC, ReactNode } from 'react'
import { getClassNameByDirection } from './utils/getClassNameByDirection'
import { DirectionValue } from './types/DirectionValue'
import styles from './Appear.module.css'
import cn from 'clsx'

interface AppearProps {
  from: DirectionValue
  children: ReactNode
  className?: string
}

export const Appear: FC<AppearProps> = ({ 
  from, 
  children,
  className, 
}) => {
  const classNames = cn(styles.Appear, styles[getClassNameByDirection(from)], className)

  return (
    <div className={classNames}>
      {children}
    </div>
  )
}