// * Modules
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// * API
import { useCheckAuth } from '../../../api/hooks/auth/useCheckAuth'
import { useJoinTeam } from '../../../api/hooks/team/useJoinTeam'
import { useLeaveAndJoin } from '../../../api/hooks/team/useLeaveAndJoin'
import ROUTES from '../../../constants/routes'
import { useGetScreenWidth } from '../../../hooks/useGetScreenWidth'
import AppHeader from '../../../shared/components/AppHeader/AppHeader'
import Loader from '../../../shared/components/Loader/Loader'
import { setTeamsFilter } from '../../../store/reducers/TeamsFiltersSlice'
import NotFound from '../../Teammates/components/NotFound/NotFound'
import { MobileProfile } from '../Modal/TeamPreviewModalPhone/TeamPreviewModalPhone.styles'

import Teams from './Teams/Teams'
import { ModalContent } from './ModalContent'
import { ModalContentPhone } from './ModalContentPhone'
// * Styles
import { Container, NotFoundContainer, TeamCardModal } from './TeamsList.styles'

function TeamsList() {
  let { data: user, isLoading: isLoadingUserData } = useCheckAuth()
  const width = useGetScreenWidth()
  const userId = user?._id

  const [selectedTeam, setSelectedTeam] = useState({})
  const [open, setOpen] = useState(false)
  let [changeModal, setChangeModal] = useState('')

  const { mutate: joinUser, isLoading: isUserTeamLoading } = useJoinTeam()
  const [isNotFound, setIsNotFound] = useState(false)

  const handleComeback = () => {
    setIsNotFound(false)
  }

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
        if (width <= 600) {
          setOpen(false)
          setTimeout(() => {
            setOpen(true)
            setChangeModal('alreadyOnTeam')
          }, 100)
        } else {
          setChangeModal('alreadyOnTeam')
        }
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

  if (isUserTeamLoading || isLeaving || isJoining) {
    return (
      <Container>
        <Loader />
      </Container>
    )
  }

  return (
    <>
      <AppHeader
        sliceName="teamsFilters"
        filterValueAction={setTeamsFilter}
        hideLogoForMobile={true}
      />
      {/* This will be displayed for mobile screens <= 600 px */}

      <MobileProfile anchor="bottom" open={open} onClose={handleClose}>
        <ModalContentPhone
          changeModal={changeModal}
          user={user}
          handleClose={handleClose}
          handleLeaveAndJoin={handleLeaveAndJoin}
          handleJoin={handleJoin}
          selectedTeam={selectedTeam}
        />
      </MobileProfile>

      {isNotFound ? (
        <NotFoundContainer>
          <NotFound handleComeback={handleComeback} />
        </NotFoundContainer>
      ) : (
        <Container>
          {/* This modal is used for screen width > 600px */}
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
          <Teams
            handleClickOpen={handleClickOpen}
            setIsNotFound={setIsNotFound}
            isLoadingUserData={isLoadingUserData}
            width={width}
          />
        </Container>
      )}
    </>
  )
}

export default TeamsList
