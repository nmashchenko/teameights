import { useEffect } from 'react'

export const useOutsideClick = (ref, callback, isChildModalOpen = false) => {
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      if (isChildModalOpen) {
        // Close child modal first
        return
      }
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [callback, ref, isChildModalOpen])
}
