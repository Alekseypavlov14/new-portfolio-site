import { FC } from 'react'
import { Decoration } from '@shared/components/Decoration'
import { H1 } from '@shared/components/Text'
import styles from './Title.module.css'

interface TitleProps {}

export const Title: FC<TitleProps> = () => {
  return (
    <H1 className={styles.Title}>
      Realize your dreams
      <Decoration className={styles.Decoration} />
    </H1>
  )
}