import { FC } from 'react'
import { Appear, Directions } from '@shared/components/Animations'
import { H1 } from '@shared/components/Text'
import styles from './Title.module.css'

interface TitleProps {}

export const Title: FC<TitleProps> = () => {
  return (
    <Appear from={Directions.Left}>
      <H1 className={styles.Title}>
        My projects
      </H1>
    </Appear>
  )
}