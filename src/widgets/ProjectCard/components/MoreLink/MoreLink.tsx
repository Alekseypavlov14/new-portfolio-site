import { FC } from 'react'
import styles from './MoreLink.module.css'

interface MoreLinkProps {
  onClick: () => void
}

export const MoreLink: FC<MoreLinkProps> = ({ onClick }) => {
  return (
    <span 
      className={styles.MoreLink} 
      onClick={onClick}
    >
      more
    </span>
  )
}