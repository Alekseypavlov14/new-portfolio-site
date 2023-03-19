import { getTechnologiesFromProjects } from './getTechnologiesFromProjects'
import { parseTechnologiesToOptions } from './parseTechnologiesToOptions'
import { sortKeysInAlphabet } from './sortKeysInAlphabet'
import { ProjectEntity } from "@entities/projects"

export function getOptionsFromProjects(projects: ProjectEntity[]) {
  const technologies = getTechnologiesFromProjects(projects)

  const technologiesSortedInAlphabet = sortKeysInAlphabet(technologies)

  const options = parseTechnologiesToOptions(technologiesSortedInAlphabet)

  return options
}