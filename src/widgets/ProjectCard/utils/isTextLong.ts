import { MAX_DESCRIPTION_LENGTH } from '../const'

export function isTextLong(text: string) {
  return text.length > MAX_DESCRIPTION_LENGTH
}