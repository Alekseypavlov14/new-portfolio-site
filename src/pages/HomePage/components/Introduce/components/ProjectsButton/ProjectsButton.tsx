import { FC } from 'react'
import { useNavigation } from '@app/navigation'
import { Button } from '@shared/components/Button'

interface ProjectsButtonProps {}

export const ProjectsButton: FC<ProjectsButtonProps> = () => {
  const { navigateProjectsPage } = useNavigation()

  return (
    <Button big outlined onClick={navigateProjectsPage}>Projects</Button>
  )
}