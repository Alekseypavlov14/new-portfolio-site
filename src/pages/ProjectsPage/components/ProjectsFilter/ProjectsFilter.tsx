import { FC } from 'react'
import { Container } from '@shared/components/Container'
import { H1, H4 } from '@shared/components/Text'
import { Select } from './components/Select'
import styles from './ProjectsFilter.module.css'

interface ProjectsFilterProps {}

export const ProjectsFilter: FC<ProjectsFilterProps> = () => {
  return (
    <div className={styles.ProjectsFilter}>
      <Container>
        <H1 className={styles.Title}>My projects</H1>
        <H4 className={styles.Subtitle}>Filter by used tools</H4>
        <Select />
      </Container>
    </div>
  )
}