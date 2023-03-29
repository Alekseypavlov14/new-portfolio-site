import { FC } from 'react'
import { Appear, Directions } from '@shared/components/Animations'
import { H4 } from '@shared/components/Text'
import styles from './Subtitle.module.css'

interface SubtitleProps {}

export const Subtitle: FC<SubtitleProps> = () => {
  return (
    <Appear from={Directions.Right}>
      <H4 className={styles.Subtitle}>
        Filter by used tools
      </H4>
    </Appear>
  )
}