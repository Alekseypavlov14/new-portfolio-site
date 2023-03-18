import { getTechnologiesFromProjects } from './getTechnologiesFromProjects'
import { parseKeysToOptions } from './../utils/parseKeysToOptions'
import { sortKeysInAlphabet } from './sortKeysInAlphabet'
import { ProjectEntity } from "@entities/projects"

export function getOptionsFromProjects(projects: ProjectEntity[]) {
  const technologies = getTechnologiesFromProjects(projects)

  const technologiesSortedInAlphabet = sortKeysInAlphabet(technologies)

  const options = parseKeysToOptions(technologiesSortedInAlphabet)

  return options
}