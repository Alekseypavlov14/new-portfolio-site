import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import styles from './Button.module.css'
import cn from 'clsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  onClick: () => void
  big?: boolean
  outlined?: boolean
}

export const Button: FC<ButtonProps> = ({ children, onClick, big, outlined, ...props }) => {
  const classNames = cn(
    styles.Button,
    big && styles.Big,
    outlined && styles.Outlined
  )

  return (
    <button 
      className={classNames}
      onClick={onClick}
      {...props} 
    >
      {children}
    </button>
  )
}