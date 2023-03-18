import { FC } from 'react'
import { useFilteredProjects } from '../../hooks/useFilteredProjects'
import { ProjectCard } from '@widgets/ProjectCard'
import styles from './QueryResult.module.css'

interface QueryResultProps {}

export const QueryResult: FC<QueryResultProps> = () => {
  const projects = useFilteredProjects()

  return (
    <div className={styles.QueryResult}>
      {projects.map(project => (
        <ProjectCard 
          project={project} 
          key={project.id} 
        />
      ))}
    </div>
  )
}