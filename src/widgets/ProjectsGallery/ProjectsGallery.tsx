import { FC } from 'react'
import { MoreButton } from './components/MoreButton'
import { Container } from '@shared/components/Container'
import { Projects } from './components/Projects'
import { Title } from './components/Title'
import styles from './ProjectsGallery.module.css'

interface ProjectsGalleryProps {}

export const ProjectsGallery: FC<ProjectsGalleryProps> = () => {
  return (
    <div className={styles.ProjectsGallery}>
      <Container>
        <Title />
        <Projects />
        <MoreButton />
      </Container>
    </div>
  )
}