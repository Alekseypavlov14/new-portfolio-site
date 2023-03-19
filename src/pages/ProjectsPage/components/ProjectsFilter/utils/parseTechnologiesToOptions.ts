import { Option } from "../types/Option"

export function parseTechnologiesToOptions(keys: string[]): Option[] {
  return keys.map(key => ({
    label: key,
    value: key
  }))
}