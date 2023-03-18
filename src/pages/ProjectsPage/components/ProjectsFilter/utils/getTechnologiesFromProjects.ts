import { ProjectEntity } from '@entities/projects'

export function getTechnologiesFromProjects(projects: ProjectEntity []) {
  const technologies: string[] = []

  projects.forEach(project => {
    const projectTechnologies = project.technologies
    technologies.push(...projectTechnologies)
  })

  const uniqueTechnologies = Array.from(new Set(technologies))
  
  return uniqueTechnologies
}