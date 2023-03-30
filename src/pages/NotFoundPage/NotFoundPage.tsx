import { FC } from 'react'
import { Decoration } from '@shared/components/Decoration'
import { GoBackLink } from './components/GoBackLink'
import { H1, H4 } from '@shared/components/Text'
import styles from './NotFoundPage.module.css'

interface NotFoundPageProps {}

export const NotFoundPage: FC<NotFoundPageProps> = () => {
  return (
    <div className={styles.NotFoundPage}>
      <div className={styles.Container}>
        <H1 className={styles.Title}>404 Error</H1>
        <H4>This url address can not be found, go back <GoBackLink /></H4>
      </div>
    </div>
  )
}