import { FC } from 'react'
import { Appear, Directions } from '@shared/components/Animations'
import { H4 } from '@shared/components/Text'
import styles from './Subtitle.module.css'

interface SubtitleProps {}

export const Subtitle: FC<SubtitleProps> = () => {
  return (
    <Appear from={Directions.Left} className={styles.SubtitleAnimationBlock}>
      <H4 className={styles.Subtitle}>
        I am a frontend developer from Ukraine. I am ready to help you with your awesome idea!
      </H4>
    </Appear>
  )
}