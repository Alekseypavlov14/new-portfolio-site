import { FC } from 'react'
import { Appear, Directions } from '@shared/components/Animations'
import { Decoration } from '@shared/components/Decoration'
import { H1 } from '@shared/components/Text'
import styles from './Title.module.css'

interface TitleProps {}

export const Title: FC<TitleProps> = () => {
  return (
    <H1 className={styles.Title}>
      <Appear from={Directions.Left}>
        Realize your dreams
      </Appear>
      <Decoration className={styles.Decoration} />
    </H1>
  )
}