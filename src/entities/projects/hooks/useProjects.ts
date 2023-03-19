import { QUERY_KEY } from './../const'
import { useQuery } from 'react-query'
import { fetchProjects } from '../api/fetchProjects'

export function useProjects() {
  return useQuery(QUERY_KEY, async () => await fetchProjects())
}