import { FC } from 'react'
import { resultSelector, useSearchStore } from '../../store'
import { Appear, Directions } from '@shared/components/Animations'
import { ProjectCard } from '@widgets/ProjectCard'
import styles from './QueryResult.module.css'

interface QueryResultProps {}

export const QueryResult: FC<QueryResultProps> = () => {
  const projects = useSearchStore(resultSelector)

  return (
    <Appear 
      className={styles.QueryResult}
      from={Directions.Bottom} 
    >
      {projects.map(project => (
        <ProjectCard 
          project={project} 
          key={project.id} 
        />
      ))}
    </Appear>
  )
}