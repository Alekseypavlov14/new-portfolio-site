import { useMemo } from 'react'
import { getOptionsFromProjects } from './../utils/getOptionsFromProjects'
import { useProjects } from '@entities/projects'
import { Option } from '../types/Option'

export function useOptions(): Option[] {
  const { projects } = useProjects()

  const options = useMemo(() => getOptionsFromProjects(projects), [projects])

  return options
}