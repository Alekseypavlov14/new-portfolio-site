import { FC } from 'react'
import { MoreButton } from './components/MoreButton'
import { Container } from '@shared/components/Container'
import { ProjectList } from './components/ProjectList'
import { Title } from './components/Title'
import styles from './Projects.module.css'

interface ProjectsProps {}

export const Projects: FC<ProjectsProps> = () => {
  return (
    <div className={styles.Projects}>
      <Container>
        <Title />
        <ProjectList />
        <MoreButton />
      </Container>
    </div>
  )
}