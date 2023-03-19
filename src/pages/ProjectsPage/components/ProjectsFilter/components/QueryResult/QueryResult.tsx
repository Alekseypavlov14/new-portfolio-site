import { FC } from 'react'
import { resultSelector, useSearchStore } from '../../store'
import { ProjectCard } from '@widgets/ProjectCard'
import styles from './QueryResult.module.css'

interface QueryResultProps {}

export const QueryResult: FC<QueryResultProps> = () => {
  const projects = useSearchStore(resultSelector)

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