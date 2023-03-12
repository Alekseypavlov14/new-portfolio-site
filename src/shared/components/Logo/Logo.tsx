import { FC } from 'react'
import styles from './Logo.module.css'

interface LogoProps {}

export const Logo: FC<LogoProps> = () => {
  return (
    <div className={styles.Logo}>
      Logo
    </div>
  )
}