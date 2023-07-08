// * Modules
import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'

// * API
import { useCheckAuth } from '../../api/hooks/auth/useCheckAuth'
import AppHeader from '../../shared/components/AppHeader/AppHeader'
import SliderToTop from '../../shared/components/SliderToTop/SliderToTop'
import { GlobalStyle } from '../../shared/styles/Global.styles'
import { setUsersFilter } from '../../store/reducers/UsersFiltersSlice'

import Cards from './components/Cards/Cards'
// * Components
import NotFound from './components/NotFound/NotFound'
import UserProfile from './components/UserProfile/UserProfile'
import UserProfilePhone from './components/UserProfile/UserProfilePhone'
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

  const handleComeback = () => {
    setIsNotFound(false)
  }

  /**
   * Get global state from redux
   */
  const { data: user, isLoading: isLoadingUseData } = useCheckAuth()
  /**
   * Handle open and close for modal window that pops up whenever user clicks on the card
   */
  const handleOpen = (user) => {
    setShowUser(user)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <GlobalStyle />
      <AppHeader sliceName="usersFilters" filterValueAction={setUsersFilter} />
      {/* ! USED ONLY FOR 730px or more */}
      <UserCardModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ zIndex: 100 }}
      >
        <UserProfile
          currentUser={user}
          showingUser={showUser}
          handleClose={handleClose}
          open={open}
        />
      </UserCardModal>
      {/* ! USED ONLY FOR 730px or less */}
      <UserProfilePhone
        currentUser={user}
        showingUser={showUser}
        mobileProfile={open}
        handleClose={handleClose}
      />
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
                handleOpen={handleOpen}
                isLoadingUseData={isLoadingUseData}
              />
            </CardsContainer>
          </GridContainer>
          <SliderToTop />
        </CardsZone>
      )}
    </>
  )
}

export default Teammates
