// * Modules
import React, { useEffect, useState } from 'react'
import { animateScroll as scroll } from 'react-scroll'

// * Assets
import Slider from '../../../../assets/Shared/Slider'

// * Styles
import {
  AccessibilityContainer,
  AccessibilityWindow,
  ScrollbarOn,
  SliderContainer,
} from './SliderToTop.styles'

const accesibilityMenu = ['Toggle scrollbar']

const SliderToTop = ({ scrollbar, toggleScrollbar }) => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  const [accessibility, showAccessibility] = useState(false)

  const toggleAccessibility = () => {
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

  // ! TODO: FIX STRANGE WIDTH ON MOBILES
  // const accesibilityWindow = (
  //   <AccessibilityWindow show={accessibility}>
  //     {accesibilityMenu.map((option) => {
  //       return (
  //         <ScrollbarOn key={option} onClick={toggleScrollbar} isOn={scrollbar}>
  //           {option}
  //         </ScrollbarOn>
  //       )
  //     })}
  //   </AccessibilityWindow>
  // )

  return (
    <>
      {isVisible ? (
        <SliderContainer onClick={toggleHome}>
          <Slider />
        </SliderContainer>
      ) : (
        <>
          <AccessibilityContainer show={accessibility} onClick={toggleAccessibility}>
            ?
          </AccessibilityContainer>
          {/* {accesibilityWindow} */}
        </>
      )}
    </>
  )
}

export default SliderToTop
