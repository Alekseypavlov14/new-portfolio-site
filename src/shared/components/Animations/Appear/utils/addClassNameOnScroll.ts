import { START_ANIMATION_COEFFICIENT } from "../const"
import { getOffsetTop } from "./getOffsetTop"

export function addClassNameOnScroll(element: HTMLElement, className: string) {
  if (!element) return

  const elementHeight = element.offsetHeight
  const elementOffset = getOffsetTop(element)
  
  let animationStartPoint = window.innerHeight - Math.min(elementHeight, window.innerHeight) / START_ANIMATION_COEFFICIENT

  if (
    (window.pageYOffset > elementOffset - animationStartPoint) &&
    (window.pageYOffset < (elementOffset + elementHeight))
  ) {
    element.classList.add(className)
  } else {
    element.classList.remove(className)
  }
}