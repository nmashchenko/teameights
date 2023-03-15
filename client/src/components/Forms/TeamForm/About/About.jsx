import React, { useRef } from 'react'

import {
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
} from '../TeamForm.styles'

const About = ({ team, isEditing }) => {
  console.log(isEditing)

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
            <p>[TAG]</p>
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
      </TeamCardTop>
      <TeamCardBody>
        <TeamCardBodyPoint>
          <h3>Description</h3>
          <TeamCardDesc>{team.description}</TeamCardDesc>
        </TeamCardBodyPoint>
        <TeamCardBodyPoint></TeamCardBodyPoint>
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
      </TeamCardBody>
    </TeamCardFigure>
  )
}

export default About
