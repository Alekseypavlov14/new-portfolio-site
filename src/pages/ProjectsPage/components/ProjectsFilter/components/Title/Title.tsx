import { FC } from 'react'
import { H1 } from '@shared/components/Text'
import styles from './Title.module.css'

interface TitleProps {}

export const Title: FC<TitleProps> = () => {
  return (
    <H1 className={styles.Title}>My projects</H1>
  )
}