// * Modules
import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'

// * API
import { useCheckAuth } from '../../api/hooks/auth/useCheckAuth'
import { GlobalStyle } from '../../shared/styles/Global.styles'

import Cards from './components/Cards/Cards'
// * Components
import Filters from './components/FiltersArea/Filters'
import NotFound from './components/NotFound/NotFound'
import SliderToTop from './components/SliderToTop/SliderToTop'
import UserProfile from './components/UserProfile/UserProfile'
import UserProfilePhone from './components/UserProfilePhone/UserProfilePhone'
// * Styles
import {
  CardsContainer,
  CardsZone,
  GridContainer,
  InfoContainer,
  UserCardModal,
} from './Teammates.styles'

function Teammates() {
  /**
   * Set of states that are used by this component
   */
  const [open, setOpen] = useState(false)
  const [showUser, setShowUser] = useState({})
  const [isNotFound, setIsNotFound] = useState(false)
  const [displayFiltered, setDisplayFiltered] = useState(false)
  const [mobileProfile, setMobileProfile] = useState(false)

  const handleComeback = () => {
    setIsNotFound(false)
    setDisplayFiltered(false)
  }

  /**
   * Get global state from redux
   */
  const { data: user, isLoading: isLoadingUseData } = useCheckAuth()

  const showMobileProfile = () => setMobileProfile(!mobileProfile)
  /**
   * Handle open and close for modal window that pops up whenever user clicks on the card
   */
  const handleOpen = (user) => {
    setShowUser(user)
    setOpen(true)
    showMobileProfile()
  }

  const handleClose = () => {
    setOpen(false)
    setShowUser({})
    showMobileProfile()
  }

  const [scrollbar, toggleScrollbar] = useState(false)

  const showScrollbar = () => {
    toggleScrollbar((prevState) => !prevState)
  }

  return (
    <>
      <ThemeProvider theme={{ scrollbar }}>
        <GlobalStyle />
        <Filters setDisplayFiltered={setDisplayFiltered} displayFiltered={displayFiltered} />
        {/* ! USED ONLY FOR 730px or more */}
        <UserCardModal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <UserProfile user={showUser} handleClose={handleClose} />
        </UserCardModal>
        {/* ! USED ONLY FOR 730px or less */}
        <UserProfilePhone user={showUser} mobileProfile={mobileProfile} handleClose={handleClose} />
        {/* If nothing was found, show user a NotFound container */}
        {isNotFound ? (
          <InfoContainer>
            <NotFound handleComeback={handleComeback} />
          </InfoContainer>
        ) : (
          <CardsZone>
            <GridContainer>
              <CardsContainer>
                <Cards
                  setIsNotFound={setIsNotFound}
                  displayFiltered={displayFiltered}
                  handleOpen={handleOpen}
                  isLoadingUseData={isLoadingUseData}
                />
              </CardsContainer>
            </GridContainer>
            <SliderToTop scrollbar={scrollbar} toggleScrollbar={showScrollbar} />
          </CardsZone>
        )}
      </ThemeProvider>
    </>
  )
}

export default Teammates
