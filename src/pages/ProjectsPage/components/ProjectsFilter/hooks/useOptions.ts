import { useMemo } from 'react'
import { getOptionsFromProjects } from './../utils/getOptionsFromProjects'
import { useProjects } from '@entities/projects'
import { Option } from '../types/Option'

export function useOptions(): Option[] {
  const { data } = useProjects()

  const options = useMemo(() => {
    if (!data) return []

    return getOptionsFromProjects(data)
  }, [data])

  return options
}