// * Modules
import React, { useCallback, useEffect, useRef } from 'react'
// * Constants
// * API
import { useInfiniteQuery } from 'react-query'
import lookup from 'country-code-lookup'

import { useLoadUsers } from '../../../../api/hooks/temeights/useLoadUsers'
import c from '../../../../assets/LanguageLogo/C'
import http from '../../../../http'
import CardSkeleton from '../CardSkeleton/CardSkeleton'
// * Components
import UserCard from '../UserCard/UserCard'

// * Redux
// * Styles
import { CardContainer } from './Cards.styles'

const Cards = ({ handleOpen, isLoadingUseData, displayFiltered, setIsNotFound }) => {
  const intObserver = useRef()

  const {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isFetched,
    data: users,
  } = useLoadUsers(displayFiltered)
  const lastUserRef = useCallback(
    (user) => {
      if (isFetchingNextPage) {
        return
      }

      if (intObserver.current) {
        intObserver.current.disconnect()
      }

      intObserver.current = new IntersectionObserver((usersPerPage) => {
        if (usersPerPage[0].isIntersecting && hasNextPage) {
          fetchNextPage()
        }
      })

      if (user) {
        intObserver.current.observe(user)
      }
    },
    [isFetchingNextPage, fetchNextPage, hasNextPage],
  )

  const content = users?.pages.map((pg) => {
    const usersPerPage = pg.results.filter((user) => user.userProgrammingLanguages)

    return usersPerPage.map((user, index) => {
      if (usersPerPage.length === index + 1) {
        return (
          <CardContainer onClick={() => handleOpen(user)} key={index}>
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
        <CardContainer onClick={() => handleOpen(user)} key={index}>
          <UserCard countryCode={lookup.byCountry(user.userCountry)} key={user._id} person={user} />
        </CardContainer>
      )
    })
  })

  {
    /* If nothing was found, show user a NotFound container */
  }

  useEffect(() => {
    if (isFetched && !content[0].length) {
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
