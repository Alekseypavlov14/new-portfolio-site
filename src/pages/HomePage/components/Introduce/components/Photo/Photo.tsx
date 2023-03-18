import { FC } from 'react'
import styles from './Photo.module.css'
import photo from './../../assets/photo.png'

interface PhotoProps {}

export const Photo: FC<PhotoProps> = () => {
  return (
    <div className={styles.Photo}>
      <img src={photo} alt='' />
    </div>
  )
}