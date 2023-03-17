import { FC } from 'react'
import { ProjectCard } from '@widgets/ProjectCard'
import { useProjects } from '@entities/projects'
import { sortByDate } from './../../utils/sortByDate'
import styles from './Projects.module.css'

interface ProjectsProps {}

export const Projects: FC<ProjectsProps> = () => {
  const { data } = useProjects()

  if (!data) return (
    <div className={styles.Projects}></div>
  )
  
  return (
    <div className={styles.Projects}>
      {sortByDate(data).slice(0, 3).map((project) => (
        <ProjectCard 
          project={project} 
          key={project.id} 
        />
      ))}
    </div>
  )
}