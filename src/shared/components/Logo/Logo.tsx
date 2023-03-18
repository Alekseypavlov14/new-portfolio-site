import { FC } from 'react'
import { useNavigation } from '@app/navigation'
import styles from './Logo.module.css'
import logo from './logo.svg'

interface LogoProps {}

export const Logo: FC<LogoProps> = () => {
  const { navigateHomePage } = useNavigation()

  return (
    <img 
      onClick={navigateHomePage}
      className={styles.Logo}
      src={logo} 
      alt='ALEX' 
    />
  )
}