import { FC } from 'react'
import { useFilteredProjects } from './hooks/useFilteredProjects'
import { QueryResult } from './components/QueryResult'
import { Container } from '@shared/components/Container'
import { Subtitle } from './components/Subtitle'
import { Select } from './components/Select'
import { Title } from './components/Title'
import styles from './ProjectsFilter.module.css'

interface ProjectsFilterProps {}

export const ProjectsFilter: FC<ProjectsFilterProps> = () => {
  useFilteredProjects()

  return (
    <div className={styles.ProjectsFilter}>
      <Container>
        <Title />
        <Subtitle />
        <Select />
        <QueryResult />
      </Container>
    </div>
  )
}