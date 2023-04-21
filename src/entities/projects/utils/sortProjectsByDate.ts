import { ProjectEntity } from '../project.entity'

export function sortProjectsByDate(projects: ProjectEntity[]) {
  return projects.sort((project1: ProjectEntity, project2: ProjectEntity) => project2.date - project1.date)
}