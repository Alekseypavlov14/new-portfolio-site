import { FC } from 'react'
import { Badge } from '@shared/components/Badge'
import styles from './Technologies.module.css'

interface TechnologiesProps {
  technologies: string[]
}

export const Technologies: FC<TechnologiesProps> = ({ technologies }) => {
  return (
    <div className={styles.Technologies}>
      {technologies.map((technology, index) => (
        <Badge key={index}>{technology}</Badge>
      ))}
    </div>
  )
}