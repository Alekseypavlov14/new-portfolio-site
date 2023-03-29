import { DirectionKey } from "./types/DirectionKey"
import { DirectionValue } from "./types/DirectionValue"

export const START_ANIMATION_COEFFICIENT = 4
export const FIRST_RENDER_DELAY = 300

const TopDirection: DirectionValue = 'TOP'
const RightDirection: DirectionValue = 'RIGHT'
const BottomDirection: DirectionValue = 'BOTTOM'
const LeftDirection: DirectionValue = 'LEFT'

export const Directions: Record<DirectionKey, DirectionValue> = {
  Top: TopDirection,
  Right: RightDirection,
  Bottom: BottomDirection,
  Left: LeftDirection
}