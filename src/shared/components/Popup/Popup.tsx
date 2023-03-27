import { FC, ReactNode } from 'react'
import { useBodyLock } from './hooks/useBodyLock'
import styles from './Popup.module.css'
import cn from 'clsx'

interface PopupProps {
  children: ReactNode
  isOpened: boolean
  className?: string
}

export const Popup: FC<PopupProps> = ({ children, isOpened, className }) => {
  const popupClassNames = cn(styles.Popup, isOpened && styles.PopupOpened, className)
  const backgroundClassNames = cn(styles.Background, isOpened && styles.BackgroundOpened)
  
  useBodyLock(isOpened, [styles.BodyLocked])

  return (
    <div className={backgroundClassNames}>
      <div className={popupClassNames}>
        {children}
      </div>
    </div>
  )
}