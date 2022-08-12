// * Modules
import { useNavigate } from 'react-router-dom'
import React, { useState, useEffect, useRef, useCallback } from 'react'
import lookup from 'country-code-lookup'
import isUndefined from 'lodash/isUndefined'
import { isEqual } from 'lodash'

// * Redux
import { useDispatch } from 'react-redux'

// * Styles
import { CardContainer } from './FilteredCards.style'

// * Components
import UserCard from '../UserCard/UserCard'

// * Constants
import ROUTES from '../../../../constants/routes'

// * API
import usersApi from '../../../../api/endpoints/users'
import authApi from '../../../../api/endpoints/auth'

const FilteredCards = ({
  handleOpen,
  isLoading,
  setIsLoading,
  filteredUsers,
  setFilteredUsers,
  filteredPageNumber,
  setFilteredPageNumber,
  countries,
  roles,
  programmingLanguages,
  trigger,
}) => {
  const observer = useRef()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [hasMore, setHasMore] = useState(false)
  /**
   * Lazy loading of the pages, don't touch this part
   */

  const lastUserElementRef = useCallback(
    (node) => {
      if (isLoading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setFilteredPageNumber((prevPageNumber) => prevPageNumber + 1)
        }
      })
      if (node) observer.current.observe(node)
    },
    [isLoading, hasMore],
  )
  /**
   * This function will work one time when user loads page first time
   * he will get list of all users that can be invited to the team
   * this function should be optimized later for scaling purposes
   */
  useEffect(() => {
    setIsLoading(true)
    usersApi
      .getUsersFiltered(filteredPageNumber, countries, roles, programmingLanguages)
      .then((res) => {
        // check if user's token expired and redirect
        if (isEqual(res, 'Request failed with status code 401')) {
          dispatch(authApi.logoutUser())
          navigate(ROUTES.login, { replace: true })
        } else {
          setFilteredUsers((prevUsers) => {
            return [...prevUsers, ...res.data.results]
          })
          setHasMore(!isUndefined(res.data.next))
        }
      })
      .catch((err) => {
        console.log('error: ' + err)
      })
    // TODO: CHANGE BEFORE PRODUCTION !!!
    setTimeout(function () {
      setIsLoading(false)
    }, 1000)
    /**
     * pageNumber dependency -> whenever user scrolls to the bottom client ask for new data on specific page from server (page is updated once user gets to the bottom)
     * trigger -> whenever we make new search trigger gets activated in order to rerender component
     */
  }, [filteredPageNumber, trigger])

  return (
    <>
      {filteredUsers.map((element, index) => {
        if (filteredUsers.length === index + 1) {
          return (
            <CardContainer onClick={() => handleOpen(element)} key={index} ref={lastUserElementRef}>
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
    </>
  )
}

export default FilteredCards
