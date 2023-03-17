import { FC } from 'react'
import { ProjectEntity } from '@entities/projects'
import { Technologies } from './components/Technologies'
import { Description } from './components/Description'
import { Title } from './components/Title'
import { Link } from './components/Link'
import { Date } from './components/Date'
import styles from './ProjectCard.module.css'

interface ProjectCardProps {
  project: ProjectEntity
}

export const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className={styles.ProjectCard}>
      <div className={styles.Header}>
        <Title>{project.name}</Title>
        <Description text={project.description} />
      </div>

      <div className={styles.LinksBlock}>
        <Link to={project.link} className={styles.Link}>
          Open the app
        </Link>
        <Link to={project.repository} className={styles.Repository}>
          Source code
        </Link>
      </div>

      <div className={styles.Footer}>
        <Technologies technologies={project.technologies} />
        <Date time={project.date} />
      </div>
    </div>
  )
}