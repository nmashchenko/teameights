// * Modules
import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { isEqual } from 'lodash'
import isEmpty from 'lodash/isEmpty'

// * API
import usersApi from '../../api/endpoints/users'
import { useCheckAuth } from '../../api/hooks/useCheckAuth'

import Cards from './components/Cards/Cards'
import CardSkeleton from './components/CardSkeleton/CardSkeleton'
import FilteredCards from './components/FilteredCards/FilteredCards'
import NotFound from './components/NotFound/NotFound'
import SliderToTop from './components/SliderToTop/SliderToTop'
// * Components
import TopBar from './components/TopBar/TopBar'
import UserProfile from './components/UserProfile/UserProfile'
import UserProfilePhone from './components/UserProfilePhone/UserProfilePhone'
// * Styles
import {
  CardsContainer,
  CardsZone,
  GlobalStyle,
  GridContainer,
  InfoContainer,
  UserCardModal,
} from './UsersList.styles'

function UsersList() {
  /**
   * Set of states that are used by this component
   */
  const [filteredPageNumber, setFilteredPageNumber] = useState(1)
  const [filteredUsers, setFilteredUsers] = useState([])

  const [isLoading, setIsLoading] = useState(false)
  const [countries, setCountries] = useState([])
  const [roles, setRoles] = useState([])
  const [programmingLanguages, setProgrammingLanguages] = useState([])
  const [open, setOpen] = useState(false)
  const [showUser, setShowUser] = useState({})
  const [notFound, setNotFound] = useState(false)
  const [displayFiltered, setDisplayFiltered] = useState(false)
  const [trigger, setTrigger] = useState(false)
  const [mobileProfile, setMobileProfile] = useState(false)

  const handleComeback = () => {
    setNotFound(false)
    setDisplayFiltered(false)
    setFilteredUsers([])
    setFilteredPageNumber(1)
  }

  /**
   * Get global state from redux
   */
  const { data: userData, isLoading: isLoadingUseData } = useCheckAuth()
  const user = userData?.data

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

  /**
   * Function used to regenerate the list of users with filters
   * TODO: Review this function for potential bugs and in case of any make specific fixes
   */
  const handleSubmitFilter = () => {
    const getUsersFiltered = async () => {
      setIsLoading(true)
      const users = await usersApi.getUsersFiltered(1, countries, roles, programmingLanguages)

      // check if user's token expired and redirect
      if (isEqual(localStorage.getItem('token'), null)) {
        // dispatch(authApi.logoutUser())
        // navigate(ROUTES.login, { replace: true })
      } else {
        if (isEmpty(users.data?.results)) {
          setNotFound(true)
          setDisplayFiltered(false)
        } else {
          setTrigger((prev) => !prev)
          setFilteredPageNumber(1)
          setNotFound(false)
          setDisplayFiltered(true)
          setFilteredUsers([])
        }
        setIsLoading(false)
      }
    }

    getUsersFiltered()
  }

  /**
   * Function used in <NavBar /> and passed as a props, it handles logout button
   */
  return (
    <>
      <GlobalStyle />
      <CssBaseline />
      <TopBar
        user={user}
        countries={countries}
        roles={roles}
        programmingLanguages={programmingLanguages}
        setCountries={setCountries}
        setRoles={setRoles}
        setProgrammingLanguages={setProgrammingLanguages}
        handleSubmitFilter={handleSubmitFilter}
      />
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
      {notFound ? (
        <InfoContainer>
          <NotFound handleComeback={handleComeback} />
        </InfoContainer>
      ) : (
        <CardsZone>
          <GridContainer>
            <CardsContainer>
              {displayFiltered ? (
                <FilteredCards
                  handleOpen={handleOpen}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                  filteredUsers={filteredUsers}
                  setFilteredUsers={setFilteredUsers}
                  filteredPageNumber={filteredPageNumber}
                  setFilteredPageNumber={setFilteredPageNumber}
                  countries={countries}
                  roles={roles}
                  programmingLanguages={programmingLanguages}
                  trigger={trigger}
                />
              ) : (
                <Cards handleOpen={handleOpen} isLoadingUseData={isLoadingUseData} />
              )}
            </CardsContainer>
          </GridContainer>
          <SliderToTop />
        </CardsZone>
      )}
    </>
  )
}

export default UsersList
