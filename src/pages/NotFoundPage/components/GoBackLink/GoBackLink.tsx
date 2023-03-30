import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './GoBackLink.module.css'

interface GoBackLinkProps {}

export const GoBackLink: FC<GoBackLinkProps> = () => {
  return (
    <Link className={styles.GoBackLink} to='/'>Home</Link>
  )
}