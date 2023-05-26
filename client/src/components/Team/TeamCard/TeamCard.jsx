import ArrowLeft from '../../../assets/Arrows/ArrowLeft'
import Crown from '../../../assets/Crown'
import { LOCAL_PATH } from '../../../http'

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

  // const leader = members.slice(0, 1)[0]

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

  return (
    <TeamCardFigure>
      <TeamCardTop>
        <TeamCardTopInfo>
          <div>
            <h3>Name</h3>
            <p>{team.name}</p>
          </div>
        </TeamCardTopInfo>
        <TeamCardTopInfo>
          <div>
            <h3>Tag</h3>
            <p>{team.tag}</p>
          </div>
        </TeamCardTopInfo>
        <TeamCardTopInfo>
          <div>
            <h3>Status</h3>
            <p>{team.type}</p>
          </div>
        </TeamCardTopInfo>
        <TeamCardTopInfo>
          <div>
            <h3>Country</h3>
            <p>{team.country}</p>
          </div>
        </TeamCardTopInfo>
        <TeamCardTopIcon src={LOCAL_PATH + '/' + team?.image} />
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
              <TeamCardPicture src={LOCAL_PATH + '/' + team?.leader.image} />
            </TeamCardPerson>
          </div>
          <div>
            <h3>Members</h3>
            <TeamCardMembers>
              {teammates.map((teammates, index) => {
                return (
                  <TeamCardPerson key={index}>
                    <TeamCardPicture src={LOCAL_PATH + '/' + teammates.image} />
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
                Tournaments: <span>5</span>
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
    </TeamCardFigure>
  )
}

export default TeamCard
