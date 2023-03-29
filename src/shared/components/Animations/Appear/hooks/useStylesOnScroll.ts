import { useEffect, RefObject } from 'react'
import { addClassNameOnScroll } from '../utils/addClassNameOnScroll'
import { FIRST_RENDER_DELAY } from '../const'

export function useStylesOnScroll<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  className: string
) {
  useEffect(() => {
    function scrollHandler() {
      const element = ref.current
      if (!element) return

      addClassNameOnScroll(element, className)
    }

    // on first render
    setTimeout(scrollHandler, FIRST_RENDER_DELAY)

    window.addEventListener('scroll', scrollHandler)

    return () => window.removeEventListener('scroll', scrollHandler)
  }, [])
}