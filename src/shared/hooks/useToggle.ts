import { useState } from 'react'

export function useToggle(initialValue: boolean): [boolean, () => void] {
  const [value, setValue] = useState(initialValue)

  function toggle() {
    setValue(value => !value)
  }

  return [value, toggle]
}