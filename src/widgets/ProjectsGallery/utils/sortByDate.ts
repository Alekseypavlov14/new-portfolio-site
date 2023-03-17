import { ProjectEntity } from '@entities/projects/project.entity'

export function sortByDate(projects: ProjectEntity[]) {
  return projects.sort((project1: ProjectEntity, project2: ProjectEntity) => project2.date - project1.date)
}