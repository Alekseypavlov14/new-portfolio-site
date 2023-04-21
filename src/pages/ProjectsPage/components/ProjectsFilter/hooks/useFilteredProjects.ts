import { useSearchStore, updateResultSelector } from './../store'
import { technologiesSelector, useFilterStore } from '@app/store/filterStore'
import { sortProjectsByDate, useProjects } from '@entities/projects'
import { filterProjectsByTechnologies } from '../utils/filterProjectsByTechnologies'
import { useEffect } from 'react'

export function useFilteredProjects() {
  const { projects } = useProjects()

  const updateResult = useSearchStore(updateResultSelector)
  const technologies = useFilterStore(technologiesSelector)

  useEffect(() => {
    const filteredProjects = filterProjectsByTechnologies(projects, technologies)
    const projectsSortedByDate = sortProjectsByDate(filteredProjects)
    updateResult(projectsSortedByDate)
  }, [projects, technologies])
}