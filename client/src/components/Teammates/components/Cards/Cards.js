// * Modules
import React, { useCallback, useEffect, useRef } from 'react'
// * Constants
// * API
import lookup from 'country-code-lookup'

import { useLoadUsers } from '../../../../api/hooks/temeights/useLoadUsers'
import { useGetScreenWidth } from '../../../../hooks/useGetScreenWidth'
import CardSkeleton from '../../../../shared/components/CardSkeleton/CardSkeleton'
// * Components
import UserCard from '../UserCard/UserCard'

// * Redux
// * Styles
import { CardContainer } from './Cards.styles'

const Cards = ({ handleOpen, isLoadingUseData, setIsNotFound }) => {
  const intObserver = useRef()
  const width = useGetScreenWidth()

  const {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isFetched,
    data: users,
    filtered,
  } = useLoadUsers()
  const lastUserRef = useCallback(
    (user) => {
      if (isFetchingNextPage) {
        return
      }

      if (intObserver.current) {
        intObserver.current.disconnect()
      }

      intObserver.current = new IntersectionObserver(
        (usersPerPage) => {
          if (usersPerPage[0].isIntersecting && hasNextPage) {
            fetchNextPage()
          }
        },
        { threshold: 0.9 },
      )

      if (user) {
        intObserver.current.observe(user)
      }
    },
    [isFetchingNextPage, fetchNextPage, hasNextPage],
  )

  // clickArea:
  // clickHandler is attached to CardContainer, but we are only allowing clicks in which
  // .closest returns the card figure. (.closest gets the closest parent with the
  // specified argument and returns the DOM element)
  // since UserCard is an HTML figure, it only allows events within the figure to be picked
  // OR we can just attach the onClick event handler to UserCard itself and we dont have to
  // do anything fancy
  const clickArea = (e, user) => {
    if (e.target.closest('figure') === null) {
      return
    }

    handleOpen(user)
  }

  const content = users?.pages.map((pg) => {
    const usersPerPage = pg.data

    return usersPerPage.map((user, index) => {
      if (usersPerPage.length === index + 1) {
        return (
          <CardContainer
            onClick={(e) => {
              clickArea(e, user)
            }}
            key={index}
          >
            <UserCard
              countryCode={lookup.byCountry(user.userCountry)}
              ref={lastUserRef}
              key={user._id}
              person={user}
            />
          </CardContainer>
        )
      }

      return (
        <CardContainer
          onClick={(e) => {
            clickArea(e, user)
          }}
          key={index}
        >
          <UserCard countryCode={lookup.byCountry(user.userCountry)} key={user._id} person={user} />
        </CardContainer>
      )
    })
  })

  {
    /* If nothing was found, show user a NotFound container */
  }

  useEffect(() => {
    if (isFetched && !content[0].length && !filtered) {
      setIsNotFound(true)
    }
  }, [isFetched, content])

  return (
    <>
      {content}
      {/* Load skeleton before showing real cards to improve performance of the app */}
      {(isFetchingNextPage || isLoadingUseData || isLoading) && <CardSkeleton cards={9} />}
    </>
  )
}

export default Cards
