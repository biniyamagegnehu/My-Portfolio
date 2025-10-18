import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

export const useScrollAnimation = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return {
    ref,
    isInView,
    initial: { opacity: 0, y: 50 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
    transition: { duration: 0.6 }
  }
}