import { FC } from 'react'
import { Appear, Directions } from '@shared/components/Animations'
import { H2 } from '@shared/components/Text'
import styles from './Title.module.css'

interface TitleProps {}

export const Title: FC<TitleProps> = () => {
  return (
    <Appear from={Directions.Bottom}>
      <H2 className={styles.Title}>
        My projects
      </H2>
    </Appear>
  )
}