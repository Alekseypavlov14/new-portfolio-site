import { FC } from 'react'
import { ProjectsFilter } from './components/ProjectsFilter'

interface ProjectsPageProps {}

export const ProjectsPage: FC<ProjectsPageProps> = () => {
  return (
    <>
      <ProjectsFilter />
    </>
  )
}