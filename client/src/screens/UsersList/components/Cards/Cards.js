// * Modules
import React, { useCallback, useRef } from 'react'
// * Constants
// * API
import { useInfiniteQuery } from 'react-query'
import lookup from 'country-code-lookup'

import http from '../../../../http'
import CardSkeleton from '../CardSkeleton/CardSkeleton'
// * Components
import UserCard from '../UserCard/UserCard'

// * Redux
// * Styles
import { CardContainer } from './Cards.styles'

const { api } = http

const Cards = ({ handleOpen, isLoadingUseData }) => {
  const intObserver = useRef()

  /**
   * Lazy loading of the pages, don't touch this part
   */
  const getUsers = async ({ pageParam = 1 }) => {
    return await api.get('/users', { params: { page: pageParam } })
  }
  const {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    data: users,
  } = useInfiniteQuery('users', getUsers, {
    getNextPageParam: (lastPage, allPages) => {
      return 8 !== lastPage.data.next.page ? allPages.length + 1 : undefined
    },
    refetchOnWindowFocus: false,
  })
  // lastPage.data.next.limit <- set instead of 8

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
    const usersPerPage = pg.data.results

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

  return (
    <>
      {content}
      {/* Load skeleton before showing real cards to improve performance of the app */}
      {(isFetchingNextPage || isLoadingUseData) && <CardSkeleton cards={9} />}
    </>
  )
}

export default Cards
