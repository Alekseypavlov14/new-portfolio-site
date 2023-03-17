import { FC } from 'react'
import { H2 } from '@shared/components/Text'
import styles from './Title.module.css'

interface TitleProps {}

export const Title: FC<TitleProps> = () => {
  return (
    <H2 className={styles.Title}>
      My projects
    </H2>
  )
}