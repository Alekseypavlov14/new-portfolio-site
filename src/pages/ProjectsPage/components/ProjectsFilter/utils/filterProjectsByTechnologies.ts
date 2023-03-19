import { ProjectEntity } from '@entities/projects'

export function filterProjectsByTechnologies(projects: ProjectEntity[], technologies: string[]) {
  return projects.filter(project => {
    return technologies.every(technology => project.technologies.includes(technology))
  })
}