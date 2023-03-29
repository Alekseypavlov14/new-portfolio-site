import { FC } from 'react'
import { ProjectCard } from '@widgets/ProjectCard'
import { useProjects } from '@entities/projects'
import { sortByDate } from '../../utils/sortByDate'
import styles from './ProjectList.module.css'
import { Decoration } from '@shared/components/Decoration'

interface ProjectListProps {}

export const ProjectList: FC<ProjectListProps> = () => {
  const { data } = useProjects()

  if (!data) return (
    <div className={styles.ProjectList}></div>
  )
  
  return (
    <div className={styles.ProjectList}>
      {sortByDate(data).slice(0, 3).map((project) => (
        <ProjectCard 
          project={project} 
          key={project.id} 
        />
      ))}

      <Decoration className={styles.Decoration1} />
      <Decoration className={styles.Decoration2} />
      <Decoration className={styles.Decoration3} />
    </div>
  )
}