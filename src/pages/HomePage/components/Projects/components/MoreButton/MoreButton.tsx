import { FC } from 'react'
import { Appear, Directions } from '@shared/components/Animations'
import { useNavigation } from '@app/navigation'
import { Button } from '@shared/components/Button'
import styles from './MoreButton.module.css'

interface MoreButtonProps {}

export const MoreButton: FC<MoreButtonProps> = () => {
  const { navigateProjectsPage } = useNavigation()

  return (
    <Appear from={Directions.Bottom}>
      <Button  
        onClick={navigateProjectsPage} 
        className={styles.MoreButton}
      >
        More projects
      </Button>
    </Appear>
  )
}