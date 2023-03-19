import { FC, ReactNode } from 'react'
import { NavLink as ReactNavLink} from 'react-router-dom'
import { H6 } from '@shared/components/Text'
import styles from './NavLink.module.css'
import cn from 'clsx'

interface NavLinkProps {
  to: string
  children: ReactNode
  className?: string 
  onClick?: () => void
}

interface ClassNameProps {
  isActive: boolean
  isPending: boolean
}

export const NavLink: FC<NavLinkProps> = ({ to, children, className, onClick }) => {
  function getClassNames(props: ClassNameProps) {
    return cn(styles.NavLink, props.isActive && styles.ActiveNavLink, className)
  }

  function clickHandler() {
    if (onClick) onClick()
  }

  return (
    <ReactNavLink 
      className={getClassNames}
      onClick={clickHandler} 
      to={to}
    >
      <H6>{children}</H6>
    </ReactNavLink>
  )
}