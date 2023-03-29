import { FC, ReactNode } from 'react'
import { getClassNames } from '@shared/lib/getClassNames' 
import { Anchor } from '@shared/components/Anchor'
import { H3 } from '@shared/components/Text'
import styles from './Link.module.css'

interface LinkProps {
  to: string
  children: ReactNode
  className?: string
}

export const Link: FC<LinkProps> = ({ to, children, className }) => {
  const classNames = getClassNames(styles.Link, className)

  return (
    <Anchor className={classNames} href={to}>
      <H3>{children}</H3>
    </Anchor>
  )
}