// * Modules
import React, { useState, useEffect, useRef, useCallback } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import lookup from 'country-code-lookup'
import isEmpty from 'lodash/isEmpty'
import isUndefined from 'lodash/isUndefined'
import Modal from '@mui/material/Modal'
import { useNavigate } from 'react-router-dom'

// * Redux
import { useSelector, useDispatch } from 'react-redux'

// * Constants
import ROUTES from '../../constants/routes'

// * Components
import UserCard from './components/UserCard/UserCard'
import TopBar from './components/TopBar/TopBar'
import CardSkeleton from './components/CardSkeleton/CardSkeleton'
import NotFound from './components/NotFound/NotFound'
import UserProfile from './components/UserProfile/UserProfile'
import SliderToTop from './components/SliderToTop/SliderToTop'

// * API
import usersApi from '../../api/endpoints/users'
import authApi from '../../api/endpoints/auth'

// * Styles
import {
  GridContainer,
  CardsContainer,
  CardContainer,
  CardsZone,
  InfoContainer,
  GlobalStyle,
} from './UsersList.styles'

function UsersList() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const observer = useRef()

  /**
   * Set of states that are used by this component
   */
  const [pageNumber, setPageNumber] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [countries, setCountries] = useState([])
  const [roles, setRoles] = useState([])
  const [programmingLanguages, setProgrammingLanguages] = useState([])
  const [open, setOpen] = useState(false)
  const [showUser, setShowUser] = useState({})
  const [users, setUsers] = useState([])
  const [hasMore, setHasMore] = useState(false)
  const [notFound, setNotFound] = useState(false)
  
  const handleComeback = () => {
    setNotFound(false)
    setPageNumber(1)
  }
  /**
   * This function will work one time when user loads page first time
   * he will get list of all users that can be invited to the team
   * this function should be optimized later for scaling purposes
   */
  useEffect(() => {
    setIsLoading(true)
    usersApi.getUsers(pageNumber).then((res) => {
      setUsers((prevUsers) => {
        return [...prevUsers, ...res.data.results]
      })
      setHasMore(!isUndefined(res.data.next))
    })
    // TODO: CHANGE BEFORE PRODUCTION !!!
    setTimeout(function () {
      setIsLoading(false)
    }, 1000)
    /**
     * pageNumber dependency -> whenever user scrolls to the bottom client ask for new data on specific page from server (page is updated once user gets to the bottom)
     * notFound dependency -> whenever user didn't find any data, set page to 1 and generate new cards for the user
     */
  }, [pageNumber, notFound])

  /**
   * Lazy loading of the pages, don't touch this part
   */

  const lastUserElementRef = useCallback(
    (node) => {
      if (isLoading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1)
        }
      })
      if (node) observer.current.observe(node)
    },
    [isLoading, hasMore],
  )
  /**
   * Get global state from redux
   */
  const { isAuth, user } = useSelector((state) => state.userReducer)

  /**
   * Handle open and close for modal window that pops up whenever user clicks on the card
   */
  const handleOpen = (user) => {
    setShowUser(user)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setShowUser({})
  }

  /**
   * This is programmingLanguages useState filter, don't change it without approvement !!!
   */
  const handleCountries = (event) => {
    const {
      target: { value },
    } = event
    setCountries(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    )
  }

  /**
   * This is programmingLanguages useState filter, don't change it without approvement !!!
   */
  const handleRoles = (event) => {
    const {
      target: { value },
    } = event
    setRoles(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    )
  }

  /**
   * This is programmingLanguages useState filter, don't change it without approvement !!!
   */
  const handleProgrammingLanguages = (event) => {
    const {
      target: { value },
    } = event
    setProgrammingLanguages(
      /* On autofill we get a stringified value. */
      typeof value === 'string' ? value.split(',') : value,
    )
  }

  /**
   * Function used to regenerate the list of users with filters
   * TODO: Review this function for potential bugs and in case of any make specific fixes
   */
  const handleSubmitFilter = () => {
    const getUsersFiltered = async () => {
      setIsLoading(true)
      const users = await usersApi.getUsersFiltered(countries, roles, programmingLanguages)
      console.log(users)
      setNotFound(false)
      if (isEmpty(users.data)) {
        setNotFound(true)
      }
      setUsers(users.data)
      // TODO: CHANGE BEFORE PRODUCTION !!!
      // setTimeout(function () {
      setIsLoading(false)
      // }, 2000);
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

    if(isAuth && !user.user.isRegistered) {
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
        handleCountries={handleCountries}
        handleRoles={handleRoles}
        handleProgrammingLanguages={handleProgrammingLanguages}
        handleSubmitFilter={handleSubmitFilter}
        handleUserLogout={handleUserLogout}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <UserProfile user={showUser} handleClose={handleClose} />
      </Modal>

      {/* If nothing was found, show user a NotFound container */}
      {notFound ? (
        <InfoContainer>
          <NotFound handleComeback={handleComeback}/>
        </InfoContainer>
      ) : (
        <CardsZone>
          <GridContainer>
            <CardsContainer>
              {users.map((element, index) => {
                if (users.length === index + 1) {
                  return (
                    <CardContainer
                      onClick={() => handleOpen(element)}
                      key={index}
                      ref={lastUserElementRef}
                    >
                      <UserCard
                        countryCode={lookup.byCountry(element.userCountry)}
                        key={element._id}
                        person={element}
                      />
                    </CardContainer>
                  )
                } else {
                  return (
                    <CardContainer onClick={() => handleOpen(element)} key={index}>
                      <UserCard
                        countryCode={lookup.byCountry(element.userCountry)}
                        key={element._id}
                        person={element}
                      />
                    </CardContainer>
                  )
                }
              })}
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
