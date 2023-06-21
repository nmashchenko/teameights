import { useNavigate } from 'react-router-dom'

import LongArrowLeft from '../../../../assets/Arrows/LongArrowLeft'
import LongArrowRight from '../../../../assets/Arrows/LongArrowRight'
import unregisteredImg from '../../../../assets/Images/user/unregistered.png'
import SCrownRight from '../../../../assets/Shared/Crowns/SCrownRight'
import FlexWrapper from '../../../../shared/components/FlexWrapper/FlexWrapper'
// * Assets
import { getCountryFlag } from '../../../../utils/getCountryFlag'

import {
  Button,
  CrownContainer,
  FlagIcon,
  MobileWrapper,
  NumberSpan,
  TeamImg,
  Text,
  UserImg,
} from './TeamPreviewModalPhone.styles'

const TeamPreviewModalPhone = ({ user, team, handleClose, handleJoin }) => {
  const members = team?.members

  const teammates = members?.slice(1, members.length)

  const navigate = useNavigate()

  const getTeam = () => {
    if (user?.team === undefined || user?.team._id !== team?._id) {
      return 'Join'
    }

    const teamid = user?.team._id

    if (team?._id === teamid) {
      return 'Your'
    }
  }

  const usersTeam = getTeam()

  return (
    <MobileWrapper>
      <FlexWrapper justify="space-between">
        <Button width="63px" background="none" onClick={handleClose}>
          <LongArrowLeft />
          Back
        </Button>
        <Button width="73px" background="none" onClick={() => navigate('/team/' + team?._id)}>
          Profile
          <LongArrowRight />
        </Button>
      </FlexWrapper>
      <FlexWrapper gap="24px" direction="column" margin="32px 0 0 0">
        <FlexWrapper gap="32px" align="center">
          <div>
            <TeamImg src={team.image} alt={`${team?.name}'s image`} />
          </div>
          <FlexWrapper direction="column" maxHeight="70px">
            <FlexWrapper gap="8px" alignItems="center" maxHeight="30px">
              <Text fontSize="20px">{team?.name}</Text>
              {getCountryFlag(team.country) && <FlagIcon src={getCountryFlag(team.country)} />}
            </FlexWrapper>
            <Text fontSize="14px" color="#8F9094" fontWeight="400">
              {team?.type?.charAt(0).toUpperCase() + team?.type?.slice(1)} Type, {team.country}
            </Text>
          </FlexWrapper>
        </FlexWrapper>
        <FlexWrapper justify="space-between">
          <Text fontSize="16px" color="#fff" fontWeight="400">
            Tournaments: <NumberSpan>{team.tournaments || 0}</NumberSpan>
          </Text>
          <Text fontSize="16px" color="#fff" fontWeight="400">
            Wins: <NumberSpan>{team.wins || 0}</NumberSpan>
          </Text>
          <Text fontSize="16px" color="#fff" fontWeight="400">
            Points: <NumberSpan>{team.points || 0}</NumberSpan>
          </Text>
        </FlexWrapper>
        <Button
          width="100%"
          background="#46A11B"
          disabled={usersTeam === 'Your'}
          onClick={handleJoin}
        >
          {usersTeam} Team
        </Button>
        {team?.description && (
          <Text fontSize="16px" fontWeight="400" margin="8px 0 0 0">
            {team.description}
          </Text>
        )}
        <FlexWrapper direction="column" gap="20px" margin="0 0 24px 0">
          <FlexWrapper position="relative" gap="12px">
            <CrownContainer>
              <SCrownRight />
            </CrownContainer>
            <UserImg src={team?.leader?.image} />
            <FlexWrapper direction="column">
              <FlexWrapper gap="8px" alignItems="baseline">
                <Text fontSize="16px" color="#fff" fontWeight="400" margin="4px 0 0 0">
                  {team?.leader?.username}
                </Text>
                {getCountryFlag(team.country) && <FlagIcon src={getCountryFlag(team.country)} />}
              </FlexWrapper>
              <Text fontSize="14px" color="#8F9094" fontWeight="400">
                {team?.leader?.concentration}
              </Text>
            </FlexWrapper>
          </FlexWrapper>
          {teammates?.map((teammate, index) => (
            <FlexWrapper gap="12px" key={index}>
              <UserImg src={teammate?.image} />
              <FlexWrapper direction="column">
                <FlexWrapper gap="8px" alignItems="baseline">
                  <Text fontSize="16px" color="#fff" fontWeight="400" margin="4px 0 0 0">
                    {teammate?.username}
                  </Text>
                  {getCountryFlag(teammate?.country) && (
                    <FlagIcon src={getCountryFlag(teammate?.country)} />
                  )}
                </FlexWrapper>
                <Text fontSize="14px" color="#8F9094" fontWeight="400">
                  {teammate?.concentration}
                </Text>
              </FlexWrapper>
            </FlexWrapper>
          ))}
        </FlexWrapper>
      </FlexWrapper>
    </MobileWrapper>
  )
}

export default TeamPreviewModalPhone
