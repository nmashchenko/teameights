import { Fragment, useCallback, useEffect, useRef, useState } from 'react'

import { useLoadTeams } from '../../../../api/hooks/team/useLoadTeams'
import CardSkeleton from '../../../../shared/components/CardSkeleton/CardSkeleton'
import NotFound from '../../../Teammates/components/NotFound/NotFound'
import { TeamsListBox, TeamsWrapper } from '../TeamsList.styles'

import Desktop from './TeamData/TeamDataDesktop'
import Mobile from './TeamData/TeamDataMobile'

const Teams = ({ handleClickOpen, isLoadingUserData, width }) => {
  const intObserver = useRef()
  const [isNotFound, setIsNotFound] = useState(false)

  const {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading: isLoadingTeams,
    isFetched,
    data: teams,
    filtered,
  } = useLoadTeams()

  const lastTeamRef = useCallback(
    (team) => {
      if (isFetchingNextPage) {
        return
      }

      if (intObserver.current) {
        intObserver.current.disconnect()
      }

      intObserver.current = new IntersectionObserver(
        (teamsPerPage) => {
          if (teamsPerPage[0].isIntersecting && hasNextPage) {
            fetchNextPage()
          }
        },
        { threshold: 0.9 },
      )

      if (team) {
        intObserver.current.observe(team)
      }
    },
    [isFetchingNextPage, fetchNextPage, hasNextPage],
  )

  const content = teams?.pages.map((pg) => {
    const teamsPerPage = pg.data

    return teamsPerPage.map((team, index) => {
      if (teamsPerPage.length === index + 1) {
        return (
          <Fragment key={index}>
            {width > 900 && (
              <Desktop team={team} handleClickOpen={handleClickOpen} ref={lastTeamRef} />
            )}
            {width <= 900 && (
              <Mobile team={team} handleClickOpen={handleClickOpen} ref={lastTeamRef} />
            )}
          </Fragment>
        )
      }

      return (
        <Fragment key={index}>
          <Desktop team={team} handleClickOpen={handleClickOpen} />
          <Mobile team={team} handleClickOpen={handleClickOpen} />
        </Fragment>
      )
    })
  })

  useEffect(() => {
    if (isFetched && !content[0].length) {
      setIsNotFound(true)
    } else {
      setIsNotFound(false)
    }
  }, [isFetched, content])

  if (isNotFound) {
    return <NotFound />
  }

  return (
    <TeamsWrapper>
      <TeamsListBox>
        {content}
        {(isFetchingNextPage || isLoadingUserData || isLoadingTeams) && (
          <CardSkeleton
            cards={9}
            borderRadius={'15px'}
            height={width > 900 ? '82px' : '81px'}
            width="100%"
          />
        )}
      </TeamsListBox>
    </TeamsWrapper>
  )
}

export default Teams
