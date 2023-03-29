import { FC } from 'react'
import { Appear, Directions } from '@shared/components/Animations'
import styles from './Photo.module.css'
import photo from './../../assets/photo.png'

interface PhotoProps {}

export const Photo: FC<PhotoProps> = () => {
  return (
    <Appear from={Directions.Right} className={styles.Photo}>
      <img src={photo} alt='' />
    </Appear>
  )
}