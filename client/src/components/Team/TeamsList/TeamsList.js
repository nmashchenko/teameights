// * Modules
import { Fragment, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// * API
import { useCheckAuth } from '../../../api/hooks/auth/useCheckAuth'
import { useJoinTeam } from '../../../api/hooks/team/useJoinTeam'
import { useLeaveAndJoin } from '../../../api/hooks/team/useLeaveAndJoin'
import { useLoadTeams } from '../../../api/hooks/team/useLoadTeams'
import { B2fs, B2fw, B2lh, B3fs, B3fw, B3lh } from '../../../constants/fonts'
import ROUTES from '../../../constants/routes'
import AppHeader from '../../../shared/components/AppHeader/AppHeader'
import FlexWrapper from '../../../shared/components/FlexWrapper/FlexWrapper'
import Loader from '../../../shared/components/Loader/Loader'
import { setTeamsFilter } from '../../../store/reducers/TeamsFiltersSlice'
import NotFound from '../../Teammates/components/NotFound/NotFound'
import TeamPreviewModalPhone from '../Modal/TeamPreviewModalPhone/TeamPreviewModalPhone'

import { ModalContent } from './ModalContent'
// * Styles
import {
  Card,
  CardContainer,
  Container,
  NotFoundContainer,
  TeamButton,
  TeamCardModal,
  TeamDataDesktop,
  TeamDataMobile,
  TeamImage,
  Text,
} from './TeamsList.styles'

function TeamsList() {
  let { data: user } = useCheckAuth()
  const userId = user?._id

  const [selectedTeam, setSelectedTeam] = useState({})
  const [open, setOpen] = useState(false)
  const [displayFiltered, setDisplayFiltered] = useState(false)
  let [changeModal, setChangeModal] = useState('')

  const { mutate: joinUser, isLoading: isUserTeamLoading } = useJoinTeam()
  const [isNotFound, setIsNotFound] = useState(false)

  const handleComeback = () => {
    setIsNotFound(false)
  }

  const {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading: isLoadingTeams,
    isFetched,
    data: teams,
    filtered,
  } = useLoadTeams()

  const { leaveAndJoin, isLeaving, isJoining } = useLeaveAndJoin()

  const navigate = useNavigate()

  const handleClickOpen = (team) => {
    setSelectedTeam(team)
    setOpen(true)
    setChangeModal('joinTeam')
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleJoin = async () => {
    if (!user?.isRegistered) {
      navigate(ROUTES.login)
    } else {
      if (user.team !== undefined) {
        setChangeModal('alreadyOnTeam')
      } else {
        joinUser({ user_id: userId, teamid: selectedTeam._id })
      }
    }
  }

  const handleLeaveAndJoin = async () => {
    const leaveDetails = { user_id: user?._id, teamid: user?.team._id }
    const joinDetails = { user_id: user?._id, teamid: selectedTeam._id }

    await leaveAndJoin.mutateAsync({ leaveDetails, joinDetails })
  }

  if (isUserTeamLoading || isLoadingTeams || isLeaving || isJoining) {
    return (
      <Container>
        <Loader />
      </Container>
    )
  }

  // useEffect(() => {
  //   console.log(teams?.pages[0]?.data)
  //   if (isFetched && !teams?.pages[0]?.data.length > 0 && !filtered) {
  //     setIsNotFound(true)
  //   }
  // }, [isFetched])

  return (
    <>
      <AppHeader
        sliceName="teamsFilters"
        filterValueAction={setTeamsFilter}
        hideLogoForMobile={true}
      />
      {/* This will be displayed for mobile screens <= 520 px */}
      <TeamPreviewModalPhone
        user={user}
        team={selectedTeam}
        mobileProfile={open}
        handleClose={handleClose}
      />

      {isNotFound ? (
        <NotFoundContainer>
          <NotFound handleComeback={handleComeback} />
        </NotFoundContainer>
      ) : (
        <Container>
          <TeamCardModal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{ backdropFilter: 'blur(15px)' }}
          >
            <ModalContent
              changeModal={changeModal}
              user={user}
              handleClose={handleClose}
              handleLeaveAndJoin={handleLeaveAndJoin}
              handleJoin={handleJoin}
              selectedTeam={selectedTeam}
            />
          </TeamCardModal>
          <CardContainer>
            <Card>
              {teams?.pages[0]?.data?.map((team, i) => (
                <Fragment key={i}>
                  <TeamDataDesktop margin={i === 0 ? '0px' : '60px'}>
                    <TeamImage src={team?.image} />
                    <Text fontSize={B2fs} fontWeight={B2fw} lineHeight={B2lh} color="white">
                      {team.name}
                    </Text>
                    <Text fontSize={B2fs} fontWeight={B2fw} lineHeight={B2lh} color="white">
                      {team.tag}
                    </Text>
                    <Text fontSize={B2fs} fontWeight={B2fw} lineHeight={B2lh} color="white">
                      {team.members.length}/8
                    </Text>
                    <TeamButton onClick={() => handleClickOpen(team)}>Show</TeamButton>
                  </TeamDataDesktop>

                  <TeamDataMobile
                    margin={i === 0 ? '0px' : '16px'}
                    onClick={() => handleClickOpen(team)}
                  >
                    <FlexWrapper gap="12px" justify="center" align="center">
                      <TeamImage src={team?.image} width="50px" height="50px" />
                      <FlexWrapper direction="column">
                        <Text fontSize={B2fs} fontWeight={B2fw} color="white">
                          {team.name}
                        </Text>
                        <Text fontSize="14px" fontWeight="400" color="#5BD424">
                          {team.tag}
                        </Text>
                      </FlexWrapper>
                    </FlexWrapper>
                    <FlexWrapper direction="column" align="end" justify="end">
                      <Text fontSize="14px" fontWeight={B2fw} color="white">
                        {team.members.length}/8
                      </Text>
                    </FlexWrapper>
                  </TeamDataMobile>
                </Fragment>
              ))}
            </Card>
          </CardContainer>
        </Container>
      )}
    </>
  )
}

export default TeamsList
