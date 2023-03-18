import { parseKeysToOptions } from './../utils/parseKeysToOptions'
import { ProjectEntity } from "@entities/projects"

export function getOptionsFromProjects(projects: ProjectEntity[]) {
  let technologies: string[] = []

  projects.forEach(project => {
    const projectTechnologies = project.technologies
    technologies.push(...projectTechnologies)
  })

  technologies = Array.from(new Set(technologies))

  const options = parseKeysToOptions(technologies)

  return options
}