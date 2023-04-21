import { FC } from 'react'
import { useProjects, sortProjectsByDate } from '@entities/projects'
import { Appear, Directions } from '@shared/components/Animations'
import { ProjectCard } from '@widgets/ProjectCard'
import { Decoration } from '@shared/components/Decoration'
import styles from './ProjectList.module.css'

interface ProjectListProps {}

export const ProjectList: FC<ProjectListProps> = () => {
  const { projects } = useProjects()
  
  return (
    <div className={styles.ProjectListWrapper}>
      <Appear from={Directions.Bottom} className={styles.ProjectList}>
        {sortProjectsByDate(projects).slice(0, 3).map((project) => (
          <ProjectCard 
            project={project} 
            key={project.id} 
          />
        ))}
      </Appear>

      <Decoration className={styles.Decoration1} />
      <Decoration className={styles.Decoration2} />
      <Decoration className={styles.Decoration3} />
    </div>
  )
}