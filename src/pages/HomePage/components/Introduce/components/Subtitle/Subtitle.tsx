import { FC } from 'react'
import { H4 } from '@shared/components/Text'
import styles from './Subtitle.module.css'

interface SubtitleProps {}

export const Subtitle: FC<SubtitleProps> = () => {
  return (
    <H4 className={styles.Subtitle}>
      I am a frontend developer from Ukraine. I am ready to help you with your awesome idea!
    </H4>
  )
}