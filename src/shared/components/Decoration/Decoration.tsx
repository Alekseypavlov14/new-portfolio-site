import { FC } from 'react'
import styles from './Decoration.module.css'
import cn from 'clsx'

interface DecorationProps {
  className: string
}

export const Decoration: FC<DecorationProps> = ({ className }) => {
  const classNames = cn(styles.Decoration, className)

  return (
    <div className={classNames} />
  )
}