import { Ref, useCallback, useState } from 'react'
import { useForkedRef } from './useForkedRef'

// This hook is for when a dom node needs to be "seen" in some useEffect logic.
// Since currentElement is state, it will be effective when used in a dependency array
// while a mutable object generated by useRef isn't, and won't.

export function useCallbackRef<T extends HTMLElement = HTMLElement>(
  forwardedRef?: Ref<T>
): [T | null, (node: T | null) => void] {
  const [currentElement, setCurrentElement] = useState<T | null>(null)
  const callbackRef = useCallback((node: T | null) => {
    setCurrentElement(node)
  }, [])
  const forkedRef = useForkedRef<T>(forwardedRef, callbackRef)
  return [currentElement, forkedRef]
}
