import { useEffect, useState } from 'react'

const useYScrolled = () => {
  const [scrolled, setScrolled] = useState<boolean>(false)

  // listen for scroll event to set state
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 80) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    })
  }, [])

  return scrolled
}

export default useYScrolled
