import React from 'react'

import { useGetScreenWidth } from '../../../shared/lib/hooks/useGetScreenWidth'

import {
  StatiscitcsWrapper,
  Statistic,
  StatisticsFlex,
  TeamCardBody,
  TeamCardBodyPoint,
  TeamCardDesc,
  TeamCardFigure,
  TeamCardTop,
  TeamCardTopInfo,
} from './RegularAbout.styles'

const RegularAbout = ({ team }) => {
  const width = useGetScreenWidth()

  return (
    <TeamCardFigure>
      <TeamCardTop>
        <TeamCardTopInfo>
          <h3>Name</h3>
          <p>
            {team.name.length > 10 && width >= 1024 ? team.name.slice(0, 10) + '...' : team.name}
          </p>
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
          <TeamCardDesc>
            {team?.description ? team.description : `This team doesn't have any description yet.`}
          </TeamCardDesc>
        </TeamCardBodyPoint>
        <StatiscitcsWrapper>
          <h3>Statistics</h3>
          <StatisticsFlex>
            <Statistic>
              <p>
                Tournaments: <span>0</span>
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
        </StatiscitcsWrapper>
      </TeamCardBody>
    </TeamCardFigure>
  )
}

export default RegularAbout
