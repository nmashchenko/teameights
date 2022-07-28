import React, { useState, useEffect } from 'react'
import Slider from '../../../../assets/Slider'
import { SliderContainer } from './SliderToTop.styles'
import { animateScroll as scroll } from 'react-scroll'

const SliderToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  const listenToScroll = () => {
    let heightToShowFrom = 100
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop

    if (winScroll > heightToShowFrom) {
      !isVisible && // to limit setting state only the first time
        setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll)
    return () => window.removeEventListener('scroll', listenToScroll)
  }, [])
  return (
    <>
      {isVisible && (
        <SliderContainer onClick={toggleHome}>
          <Slider />
        </SliderContainer>
      )}
    </>
  )
}

export default SliderToTop
