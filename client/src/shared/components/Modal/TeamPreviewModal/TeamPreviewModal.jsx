import { useEffect, useState } from 'react'
import { ThreeDots } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'

import unregisteredImg from '../../../../assets/Images/user/unregistered.png'
import ArrowRight from '../../../../assets/Team/ArrowRight'
import { getCountryFlag } from '../../../../utils/getCountryFlag'
import CardSkeleton from '../../CardSkeleton/CardSkeleton'
import { HidableWrapper } from '../Modal.styles'

import TeamCardPersonBox from './TeamCardPerson'
import {
  ButtonsContainer,
  ColumnContainer,
  ImagesContainer,
  JoinTeam,
  ProfileButton,
  Statistic,
  StatisticsFlex,
  TeamCardBodyPoint,
  TeamCardDesc,
  TeamCardMembers,
  TeamCardTop,
  TeamCardTopIcon,
  TeamCardTopInfo,
  TeamText,
  TypeCountryFlagContainer,
} from './TeamPreviewModal.styles'

const TeamPreviewModal = ({ user, team, handleJoin, isLoading }) => {
  const [imgLoading, setImgLoading] = useState(true)
  const [usersTeam, setUsersTeam] = useState('')

  const members = team?.members
  const teammates = members?.slice(1, members.length)
  const countryFlag = getCountryFlag(team.country)
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
      <TeamCardTop>
        <HidableWrapper display={imgLoading ? 'block' : 'none'}>
          <CardSkeleton width="75px" height="75px" borderRadius="50%" />
        </HidableWrapper>
        <HidableWrapper display={imgLoading ? 'none' : 'block'}>
          <TeamCardTopIcon
            src={team?.image}
            alt="Team's image"
            onLoad={() => setImgLoading(false)}
          />
        </HidableWrapper>

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
          <TeamCardPersonBox
            src={team?.leader.image}
            shouldLoadImage={true}
            shouldHaveCrown={true}
          />
        </div>
        <div>
          <TeamCardMembers>
            {[...Array(7)].map((_, index) => {
              if (index < teammates.length) {
                return (
                  <TeamCardPersonBox
                    key={index}
                    src={teammates[index].image}
                    shouldLoadImage={true}
                  />
                )
              } else {
                return <TeamCardPersonBox key={index} src={unregisteredImg} />
              }
            })}
          </TeamCardMembers>
        </div>
      </ImagesContainer>
      <ButtonsContainer>
        <JoinTeam disabled={usersTeam === 'Your'} onClick={handleJoin}>
          {isLoading ? (
            <ThreeDots
              height="24"
              width="24"
              radius="9"
              color="white"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          ) : (
            `${usersTeam} Team`
          )}
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
