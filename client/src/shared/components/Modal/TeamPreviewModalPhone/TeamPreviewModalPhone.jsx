import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import LongArrowLeft from '../../../../assets/Arrows/LongArrowLeft'
import LongArrowRight from '../../../../assets/Arrows/LongArrowRight'
import FlexWrapper from '../../../../shared/components/FlexWrapper/FlexWrapper'
// * Assets
import { getCountryFlag } from '../../../../utils/getCountryFlag'
import CardSkeleton from '../../CardSkeleton/CardSkeleton'
import { HidableWrapper } from '../Modal.styles'

import TeamMember from './TeamMember'
import { Button, FlagIcon, NumberSpan, TeamImg, Text } from './TeamPreviewModalPhone.styles'

const TeamPreviewModalPhone = ({ user, team, handleClose, handleJoin }) => {
  const [usersTeam, setUsersTeam] = useState('')
  const [imgLoading, setImgLoading] = useState(true)

  const members = team?.members
  const teammates = members?.slice(1, members.length)
  const navigate = useNavigate()

  useEffect(() => {
    if (user?.team === undefined || user?.team._id !== team?._id) {
      setUsersTeam('Join')
    }

    const teamid = user?.team?._id

    if (team?._id === teamid) {
      setUsersTeam('Your')
    }
  }, [user, team])

  return (
    <>
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
          <HidableWrapper display={imgLoading ? 'block' : 'none'}>
            <CardSkeleton width="70px" height="70px" borderRadius="50%" />
          </HidableWrapper>
          <HidableWrapper display={imgLoading ? 'none' : 'block'}>
            <TeamImg
              src={team.image}
              alt={`${team?.name}'s image`}
              onLoad={() => setImgLoading(false)}
            />
          </HidableWrapper>

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
          <TeamMember
            src={team?.leader?.image}
            username={team?.leader?.username}
            concentration={team?.leader?.concentration}
            country={team.country}
            shouldHaveCrown={true}
          />

          {teammates?.map((teammate, index) => (
            <TeamMember
              src={teammate?.image}
              username={teammate?.username}
              concentration={teammate?.concentration}
              country={teammate?.country}
              key={index}
            />
          ))}
        </FlexWrapper>
      </FlexWrapper>
    </>
  )
}

export default TeamPreviewModalPhone
