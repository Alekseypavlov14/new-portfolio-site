import { FC } from 'react'
import { Appear, Directions } from '@shared/components/Animations'
import avatar from './../../assets/avatar.png'
import styles from './Photo.module.css'

interface PhotoProps {}

export const Photo: FC<PhotoProps> = () => {
  return (
    <Appear from={Directions.Right}>
      <img className={styles.Photo} src={avatar} alt='' />
    </Appear>
  )
}