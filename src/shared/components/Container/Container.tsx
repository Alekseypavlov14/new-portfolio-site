import { FC, ReactNode } from 'react'
import styles from './Container.module.css'
import cn from 'clsx'

interface ContainerProps {
  children: ReactNode
  className: string
  page?: boolean
}

export const Container: FC<ContainerProps> = ({ children, className, page }) => {
  const classNames = cn(
    styles.Container,
    page && styles.PageContainer,
    className
  )

  return (
    <div className={classNames}>
      {children}
    </div>
  )
}