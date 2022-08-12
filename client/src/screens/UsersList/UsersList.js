// * Modules
import React, { useState, useEffect } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import isEmpty from 'lodash/isEmpty'
import { useNavigate } from 'react-router-dom'
import { isEqual } from 'lodash'

// * Redux
import { useSelector, useDispatch } from 'react-redux'

// * Constants
import ROUTES from '../../constants/routes'

// * Components
import TopBar from './components/TopBar/TopBar'
import CardSkeleton from './components/CardSkeleton/CardSkeleton'
import NotFound from './components/NotFound/NotFound'
import UserProfile from './components/UserProfile/UserProfile'
import SliderToTop from './components/SliderToTop/SliderToTop'
import Cards from './components/Cards/Cards'
import FilteredCards from './components/FilteredCards/FilteredCards'
import UserProfilePhone from './components/UserProfilePhone/UserProfilePhone'

// * API
import usersApi from '../../api/endpoints/users'
import authApi from '../../api/endpoints/auth'

// * Styles
import {
  GridContainer,
  CardsContainer,
  CardsZone,
  InfoContainer,
  GlobalStyle,
  UserCardModal,
} from './UsersList.styles'

function UsersList() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  /**
   * Set of states that are used by this component
   */
  const [pageNumber, setPageNumber] = useState(1)
  const [filteredPageNumber, setFilteredPageNumber] = useState(1)
  const [users, setUsers] = useState([])
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
    setUsers([])
    setFilteredUsers([])
    setPageNumber(1)
    setFilteredPageNumber(1)
  }

  /**
   * Get global state from redux
   */
  const { isAuth, user } = useSelector((state) => state.userReducer)

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
      if (isEqual(users, 'Request failed with status code 401')) {
        dispatch(authApi.logoutUser())
        navigate(ROUTES.login, { replace: true })
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
  const handleUserLogout = () => {
    dispatch(authApi.logoutUser())
  }

  /*
   * This useEffect is triggered when user presses logout button in the NavBar component
   */
  useEffect(() => {
    if (!isAuth) {
      navigate(ROUTES.login, { replace: true })
    }

    if (isAuth && !user.user?.isRegistered) {
      navigate(ROUTES.finishRegistration, { replace: true })
    }
  }, [isAuth, navigate])

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
        handleUserLogout={handleUserLogout}
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
                <Cards
                  handleOpen={handleOpen}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                  users={users}
                  setUsers={setUsers}
                  pageNumber={pageNumber}
                  setPageNumber={setPageNumber}
                  notFound={notFound}
                />
              )}
              {/* Load skeleton before showing real cards to improve performance of the app */}
              <>{isLoading && <CardSkeleton cards={9} />}</>
            </CardsContainer>
          </GridContainer>
          <SliderToTop />
        </CardsZone>
      )}
    </>
  )
}

export default UsersList
