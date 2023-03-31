import react from 'react'
import { styled } from '@mui/material'

import ArrowLeft from '../../../../assets/Arrows/ArrowLeft'
import Crown from '../../../../assets/Crown'
import tempImg from '../../../../components/Forms/TeamForm/zxc1.jpg'
import { LOCAL_PATH } from '../../../../http'

import {
  CrownContainer,
  JoinTeam,
  Statistic,
  StatisticsFlex,
  TeamCardBody,
  TeamCardBodyPoint,
  TeamCardDesc,
  TeamCardFigure,
  TeamCardMembers,
  TeamCardPerson,
  TeamCardPicture,
  TeamCardTop,
  TeamCardTopIcon,
  TeamCardTopInfo,
  ToTeams,
} from './TeamCard.styles'

const TeamCard = ({ user, handleClose, team, handleJoin }) => {
  const members = team.members

  const leader = members.slice(0, 1)

  const teammates = members.slice(1, members.length)

  const getTeam = () => {
    if (user.team === undefined || user.team._id !== team._id) {
      return 'Join'
    }

    const teamid = user.team._id

    if (team._id === teamid) {
      return 'Your'
    }
  }

  const usersTeam = getTeam()

  console.log(usersTeam === 'Your')

  return (
    <TeamCardFigure>
      <TeamCardTop>
        <TeamCardTopInfo>
          <h3>Name</h3>
          <p>{team.name}</p>
        </TeamCardTopInfo>
        <TeamCardTopInfo>
          <h3>Tag</h3>
          <p>[TAG]</p>
        </TeamCardTopInfo>
        <TeamCardTopInfo>
          <h3>Status</h3>
          <p>{team.type}</p>
        </TeamCardTopInfo>
        <TeamCardTopInfo>
          <h3>Country</h3>
          <p>{team.country}</p>
        </TeamCardTopInfo>
        <TeamCardTopIcon src={require('./defaultImg.png')} />
      </TeamCardTop>
      <TeamCardBody>
        <TeamCardBodyPoint>
          <h3>Description</h3>
          <TeamCardDesc>{team.description}</TeamCardDesc>
        </TeamCardBodyPoint>
        <TeamCardBodyPoint>
          <div>
            <TeamCardPerson>
              <CrownContainer>
                <Crown />
              </CrownContainer>
              <h3>Leader</h3>
              <TeamCardPicture src={team?.image ? LOCAL_PATH + '/' + team.image : tempImg} />
            </TeamCardPerson>
          </div>
          <div>
            <h3>Members</h3>
            <TeamCardMembers>
              {teammates.map((teammates, index) => {
                return (
                  <TeamCardPerson key={index}>
                    <TeamCardPicture src={require('./defaultImg.png')} />
                  </TeamCardPerson>
                )
              })}
            </TeamCardMembers>
          </div>
        </TeamCardBodyPoint>
        <TeamCardBodyPoint>
          <h3>Statistics</h3>
          <StatisticsFlex>
            <Statistic>
              <p>
                Tournaments: <span>[NUMBER]</span>
              </p>
            </Statistic>
            <Statistic>
              <p>
                Wins: <span>{team.wins}</span>
              </p>
            </Statistic>
            <Statistic>
              <p>
                Points: <span>{team.points}</span>
              </p>
            </Statistic>
          </StatisticsFlex>
        </TeamCardBodyPoint>
        <TeamCardBodyPoint>
          <ToTeams onClick={handleClose}>
            <ArrowLeft />
            All Teams
          </ToTeams>
          <JoinTeam disabled={usersTeam === 'Your'} onClick={handleJoin}>
            {usersTeam} Team
          </JoinTeam>
        </TeamCardBodyPoint>
      </TeamCardBody>

      {/* 
<Text textAlign="center">Are you sure you want to join {team.name}?</Text>
            <TeamButton
              width="140px"
              height="60px"
              fontSize="20px"
              fontWeight="600"
              onClick={() => handleJoin(team._id)}
            >
              Join
            </TeamButton>
            <TeamButton
              onClick={handleClose}
              width="140px"
              height="60px"
              fontSize="20px"
              fontWeight="600"
            >
              Cancel
            </TeamButton> */}
    </TeamCardFigure>
  )
}

export default TeamCard
