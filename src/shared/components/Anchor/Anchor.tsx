import { FC, ReactNode } from 'react'
import styles from './Anchor.module.css'
import cn from 'clsx'

interface AnchorProps {
  href: string
  children?: ReactNode
  className?: string
}

export const Anchor: FC<AnchorProps> = ({ href, children, className }) => {
  const classNames = cn(styles.Anchor, className)
  const content = children || href

  return (
    <a 
      className={classNames}
      target='_blank'
      href={href} 
    >
      {content}
    </a>
  )
}