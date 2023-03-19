import { useMemo } from 'react'
import { useFilterStore, technologiesSelector, setTechnologiesSelector } from '@app/store/filterStore'
import { parseTechnologiesToOptions } from '../utils/parseTechnologiesToOptions'
import { MultiValue } from 'react-select'
import { Option } from './../types/Option'

type UseValue = {
  value: Option[]
  updateValue: (options: MultiValue<Option>) => void
}

export function useValue(): UseValue {
  const technologies = useFilterStore(technologiesSelector)
  const setTechnologies = useFilterStore(setTechnologiesSelector)

  const value = useMemo(() => parseTechnologiesToOptions(technologies), [technologies])

  function updateValue(options: MultiValue<Option>) {
    setTechnologies(options.map(option => option.value))
  }

  return { value, updateValue }
}