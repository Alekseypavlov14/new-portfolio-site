import { FC } from 'react'
import { Technology } from '../Technology'
import styles from './Technologies.module.css'

interface TechnologiesProps {
  technologies: string[]
}

export const Technologies: FC<TechnologiesProps> = ({ technologies }) => {
  return (
    <div className={styles.Technologies}>
      {technologies.map((technology, index) => (
        <Technology technology={technology} key={index} />
      ))}
    </div>
  )
}