import { useSearchStore, updateResultSelector } from './../store'
import { technologiesSelector, useFilterStore } from '@app/store/filterStore'
import { filterProjectsByTechnologies } from '../utils/filterProjectsByTechnologies'
import { useProjects } from '@entities/projects'
import { useEffect } from 'react'

export function useFilteredProjects() {
  const { projects } = useProjects()

  const updateResult = useSearchStore(updateResultSelector)
  const technologies = useFilterStore(technologiesSelector)

  useEffect(() => {
    const filteredProjects = filterProjectsByTechnologies(projects, technologies)
    updateResult(filteredProjects)
  }, [projects, technologies])
}