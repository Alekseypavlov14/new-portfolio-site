import { useSearchStore, updateResultSelector } from './../store'
import { technologiesSelector, useFilterStore } from '@app/store/filterStore'
import { filterProjectsByTechnologies } from '../utils/filterProjectsByTechnologies'
import { useProjects } from '@entities/projects'
import { useEffect } from 'react'

export function useFilteredProjects() {
  const { data: projects } = useProjects()

  const updateResult = useSearchStore(updateResultSelector)
  const technologies = useFilterStore(technologiesSelector)

  useEffect(() => {
    if (!projects) return updateResult([])

    const filteredProjects = filterProjectsByTechnologies(projects, technologies)
    updateResult(filteredProjects)
  }, [projects, technologies])
}