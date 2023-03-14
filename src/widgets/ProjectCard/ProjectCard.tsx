import { FC } from 'react'
import { ProjectEntity } from '@entities/projects'
import { Technologies } from './components/Technologies'
import { Description } from './components/Description'
import { Title } from './components/Title'
import { Link } from './components/Link'
import { Date } from './components/Date'
import styles from './ProjectCard.module.css'
import { Anchor } from '@shared/components/Anchor'
import { H3 } from '@shared/components/Text'

interface ProjectCardProps extends ProjectEntity {}

export const ProjectCard: FC<ProjectCardProps> = ({
  name,
  description,
  link,
  repository,
  technologies,
  date
}) => {
  return (
    <div className={styles.ProjectCard}>
      <Title>{name}</Title>
      <Description text={description} />

      <div className={styles.LinksBlock}>
        <Link to={link} className={styles.Link}>
          Open the app
        </Link>
        <Link to={repository} className={styles.Repository}>
          Source code
        </Link>
      </div>

      <div className={styles.Footer}>
        <Technologies technologies={technologies} />
        <Date time={date} />
      </div>
    </div>
  )
}