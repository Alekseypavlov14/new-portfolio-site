import { fetchPhoneNumbers } from '../api/fetchPhoneNumbers'
import { QUERY_KEY } from '../const'
import { useQuery } from 'react-query'

export function usePhoneNumbers() {
  return useQuery(QUERY_KEY, async () => await fetchPhoneNumbers())
}