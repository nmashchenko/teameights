import { useNavigate } from 'react-router-dom'

import unregisteredImg from '../../../../assets/Images/user/unregistered.png'
import SCrownRight from '../../../../assets/Shared/Crowns/SCrownRight'
import ArrowRight from '../../../../assets/Team/ArrowRight'
import Crown from '../../../../assets/Team/Crown'
import { LOCAL_PATH } from '../../../../http'
import { getCountryFlag } from '../../../../utils/getCountryFlag'

import {
  ButtonsContainer,
  ColumnContainer,
  CrownContainer,
  ImagesContainer,
  JoinTeam,
  ProfileButton,
  Statistic,
  StatisticsFlex,
  TeamCardBodyPoint,
  TeamCardDesc,
  TeamCardMembers,
  TeamCardPerson,
  TeamCardPicture,
  TeamCardTop,
  TeamCardTopIcon,
  TeamCardTopInfo,
  TeamText,
  TypeCountryFlagContainer,
} from './TeamPreviewModal.styles'

const TeamPreviewModal = ({ user, team, handleJoin }) => {
  const members = team?.members

  const teammates = members.slice(1, members.length)

  const countryFlag = getCountryFlag(team.country)

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
    <>
      <TeamCardTop>
        <TeamCardTopIcon src={LOCAL_PATH + '/' + team?.image} />
        <TeamCardTopInfo>
          <ColumnContainer>
            <TeamText fontSize="20px" fontWeight="500">
              {team?.name}
            </TeamText>
            <TypeCountryFlagContainer>
              <TeamText color="#8F9094">
                {team?.type.charAt(0).toUpperCase() + team?.type.slice(1)} Type, {team.country}
              </TeamText>
              {countryFlag && (
                <TeamCardTopIcon src={countryFlag} w={'25px'} h={'25px'} borderRadius={'none'} />
              )}
            </TypeCountryFlagContainer>
          </ColumnContainer>
        </TeamCardTopInfo>
      </TeamCardTop>

      <TeamCardBodyPoint>
        <StatisticsFlex>
          <Statistic>
            <p>
              Tournaments: <span>0</span>
            </p>
          </Statistic>
          <Statistic>
            <p>
              Wins: <span>{team?.wins}</span>
            </p>
          </Statistic>
          <Statistic>
            <p>
              Points: <span>{team?.points}</span>
            </p>
          </Statistic>
        </StatisticsFlex>
      </TeamCardBodyPoint>
      {team?.description && (
        <TeamCardBodyPoint>
          <TeamCardDesc>{team?.description}</TeamCardDesc>
        </TeamCardBodyPoint>
      )}
      <ImagesContainer>
        <div>
          <TeamCardPerson>
            <CrownContainer>
              <SCrownRight />
            </CrownContainer>
            <TeamCardPicture src={LOCAL_PATH + '/' + team?.leader.image} />
          </TeamCardPerson>
        </div>
        <div>
          <TeamCardMembers>
            {[...Array(7)].map((_, index) => {
              if (index < teammates.length) {
                return (
                  <TeamCardPerson key={index}>
                    <TeamCardPicture src={LOCAL_PATH + '/' + teammates[index].image} />
                  </TeamCardPerson>
                )
              } else {
                return (
                  <TeamCardPerson key={index}>
                    <TeamCardPicture src={unregisteredImg} />
                  </TeamCardPerson>
                )
              }
            })}
          </TeamCardMembers>
        </div>
      </ImagesContainer>
      <ButtonsContainer>
        <JoinTeam disabled={usersTeam === 'Your'} onClick={handleJoin}>
          {usersTeam} Team
        </JoinTeam>
        <ProfileButton onClick={() => navigate('/team/' + team?._id)}>
          Profile
          <ArrowRight />
        </ProfileButton>
      </ButtonsContainer>
    </>
  )
}

export default TeamPreviewModal
