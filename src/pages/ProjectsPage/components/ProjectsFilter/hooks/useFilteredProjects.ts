import { keysSelector, useFilterStore } from "@app/store"
import { ProjectEntity, useProjects } from "@entities/projects"

export function useFilteredProjects(): ProjectEntity[] {
  const { data: projects, isError } = useProjects()
  const keys = useFilterStore(keysSelector)

  if (!projects) return []
  if (isError) return []

  const filteredProjects = projects.filter(project => {
    return keys.every(key => project.technologies.includes(key))
  })

  return filteredProjects
}