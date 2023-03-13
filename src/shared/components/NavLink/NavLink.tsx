import { FC, ReactNode } from 'react'
import { NavLink as ReactNavLink} from 'react-router-dom'
import { H6 } from '@shared/components/Text'
import styles from './NavLink.module.css'
import cn from 'clsx'

interface NavLinkProps {
  to: string
  children: ReactNode
}

interface ClassNameProps {
  isActive: boolean
  isPending: boolean
}

export const NavLink: FC<NavLinkProps> = ({ to, children }) => {
  function getClassNames(props: ClassNameProps) {
    return cn(styles.NavLink, props.isActive && styles.ActiveNavLink)
  }

  return (
    <ReactNavLink className={getClassNames} to={to}>
      <H6>{children}</H6>
    </ReactNavLink>
  )
}