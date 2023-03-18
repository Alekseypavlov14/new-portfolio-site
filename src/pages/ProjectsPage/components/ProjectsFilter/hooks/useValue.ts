import { useMemo } from "react"
import { useFilterStore, keysSelector, setKeysSelector } from "@app/store"
import { parseKeysToOptions } from "../utils/parseKeysToOptions"
import { MultiValue } from "react-select"
import { Option } from './../types/Option'

type UseValue = {
  value: Option[]
  updateValue: (options: MultiValue<Option>) => void
}

export function useValue(): UseValue {
  const keys = useFilterStore(keysSelector)
  const setKeys = useFilterStore(setKeysSelector)

  const value = useMemo(() => parseKeysToOptions(keys), [keys])
  function updateValue(options: MultiValue<Option>) {
    setKeys(options.map(option => option.value))
  }

  return { value, updateValue }
}