import { useNavigation } from '@app/navigation'
import { Button } from '@shared/components/Button'
import { FC } from 'react'
import styles from './MoreButton.module.css'

interface MoreButtonProps {}

export const MoreButton: FC<MoreButtonProps> = () => {
  const { navigateProjectsPage } = useNavigation()

  return (
    <Button  
      onClick={navigateProjectsPage} 
      className={styles.MoreButton}
    >
      More projects
    </Button>
  )
}