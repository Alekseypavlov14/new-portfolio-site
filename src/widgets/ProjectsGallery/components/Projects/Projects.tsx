import { FC } from 'react'
import { ProjectCard } from '@widgets/ProjectCard'
import { useProjects } from '@entities/projects'
import styles from './Projects.module.css'

interface ProjectsProps {}

export const Projects: FC<ProjectsProps> = () => {
  const { data } = useProjects()
  
  return (
    <div className={styles.Projects}>
      {data?.slice(0, 3).map((project) => (
        <ProjectCard 
          project={project} 
          key={project.id} 
        />
      ))}
    </div>
  )
}