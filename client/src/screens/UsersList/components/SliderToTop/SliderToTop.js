// * Modules
import React, { useEffect, useState } from 'react'
import { animateScroll as scroll } from 'react-scroll'

// * Assets
import Slider from '../../../../assets/Slider'

// * Styles
import { AccessibilityContainer, AccessibilityWindow, SliderContainer } from './SliderToTop.styles'

const accesibilityMenu = ['Turn on scrollbar']

const SliderToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  const [accessibility, showAccessibility] = useState(false)

  const toggleAccessibility = () => {
    console.log('LOl')
    showAccessibility((prevState) => {
      return !prevState
    })
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

  const accesibilityWindow = (
    <AccessibilityWindow show={accessibility}>
      {accesibilityMenu.map((option) => {
        return <p key={option}>{option}</p>
      })}
    </AccessibilityWindow>
  )

  return (
    <>
      {isVisible ? (
        <SliderContainer onClick={toggleHome}>
          <Slider />
        </SliderContainer>
      ) : (
        <>
          <AccessibilityContainer onClick={toggleAccessibility}>?</AccessibilityContainer>
          {accesibilityWindow}
        </>
      )}
    </>
  )
}

export default SliderToTop
