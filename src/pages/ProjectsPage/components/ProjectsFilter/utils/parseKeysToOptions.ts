import { Option } from "../types/Option"

export function parseKeysToOptions(keys: string[]): Option[] {
  return keys.map(key => ({
    label: key,
    value: key
  }))
}