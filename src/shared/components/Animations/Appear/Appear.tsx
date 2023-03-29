import { FC, ReactNode, useRef } from 'react'
import { getClassNameByDirection } from './utils/getClassNameByDirection'
import { useStylesOnScroll } from './hooks/useStylesOnScroll'
import { DirectionValue } from './types/DirectionValue'
import { getClassNames } from '@shared/lib/getClassNames'
import styles from './Appear.module.css'

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
  const ref = useRef<HTMLDivElement>(null)
  useStylesOnScroll(ref, styles[getClassNameByDirection(from)])

  const classNames = getClassNames(styles.Appear, className)

  return (
    <div 
      className={classNames} 
      ref={ref}
    >
      {children}
    </div>
  )
}