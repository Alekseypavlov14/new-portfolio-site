import { DirectionKey } from '../types/DirectionKey'
import { DirectionValue } from '../types/DirectionValue'

export function getClassNameByDirection(direction: DirectionValue): DirectionKey {
  const lowerCased = direction.toLowerCase()
  const capitalized = lowerCased[0].toUpperCase() + lowerCased.slice(1)
  return capitalized as DirectionKey
}