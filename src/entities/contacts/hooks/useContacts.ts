import { fetchContacts } from '../api/fetchContacts'
import { QUERY_KEY } from './../const'
import { useQuery } from "react-query"

export function useContacts() {
  return useQuery(QUERY_KEY, async () => await fetchContacts())
}