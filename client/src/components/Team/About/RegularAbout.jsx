import React from 'react'

import {
  Statistic,
  StatisticsFlex,
  TeamCardBody,
  TeamCardBodyPoint,
  TeamCardDesc,
  TeamCardFigure,
  TeamCardTop,
  TeamCardTopInfo,
} from '../TeamForm/TeamForm.styles'

const RegularAbout = ({ team }) => {
  return (
    <TeamCardFigure>
      <TeamCardTop>
        <TeamCardTopInfo>
          <h3>Name</h3>
          <p>{team.name.length > 10 ? team.name.slice(0, 10) + '...' : team.name}</p>
        </TeamCardTopInfo>
        <TeamCardTopInfo>
          <h3>Tag</h3>
          <p>{team.tag.toUpperCase()}</p>
        </TeamCardTopInfo>
        <TeamCardTopInfo>
          <h3>Type</h3>
          <p>
            {[team.type.slice(0, 1).toUpperCase(), team.type.slice(1, team.type.length)].join('')}
          </p>
        </TeamCardTopInfo>
        <TeamCardTopInfo>
          <h3>Country</h3>
          <p>{team.country}</p>
        </TeamCardTopInfo>
      </TeamCardTop>
      <TeamCardBody>
        <TeamCardBodyPoint>
          <h3>Description</h3>
          <TeamCardDesc>{team.description}</TeamCardDesc>
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
      </TeamCardBody>
    </TeamCardFigure>
  )
}

export default RegularAbout
