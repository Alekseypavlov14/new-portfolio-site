import { FC, ReactNode } from 'react'
import { Anchor } from '@shared/components/Anchor'
import { H3 } from '@shared/components/Text'
import styles from './Link.module.css'
import cn from 'clsx'

interface LinkProps {
  to: string
  children: ReactNode
  className?: string
}

export const Link: FC<LinkProps> = ({ to, children, className }) => {
  const classNames = cn(styles.Link, className)

  return (
    <Anchor className={classNames} href={to}>
      <H3>{children}</H3>
    </Anchor>
  )
}