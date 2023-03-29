import { FC } from 'react'
import { resultSelector, useSearchStore } from '../../store'
import { Appear, Directions } from '@shared/components/Animations'
import { ProjectCard } from '@widgets/ProjectCard'
import { Decoration } from '@shared/components/Decoration'
import styles from './QueryResult.module.css'

interface QueryResultProps {}

export const QueryResult: FC<QueryResultProps> = () => {
  const projects = useSearchStore(resultSelector)

  return (
    <div className={styles.QueryResultWrapper}>
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

      <Decoration className={styles.Decoration1} />
      <Decoration className={styles.Decoration2} />
      <Decoration className={styles.Decoration3} />
      <Decoration className={styles.Decoration4} />
    </div>
  )
}