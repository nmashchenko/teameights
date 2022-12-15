// * Modules
import { useEffect, useState } from 'react'
import { InfinitySpin } from 'react-loader-spinner'
// * Redux
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import isEqual from 'lodash/isEqual'

import submissionAPI from '../../../api/endpoints/submission'
// * API
import teamsAPI from '../../../api/endpoints/team'
// * Assets
import TopTemplate from '../../TopTemplate/TopTemplate'

// * Styles
import {
  BaseContainer,
  Container,
  Content,
  InfoContainer,
  Text,
  TextCTA,
} from './Leaderboard.styles'

function Leaderboard() {
  const [updating, setUpdating] = useState(true)
  const { user } = useSelector((state) => state.userReducer)
  const [submissions, setSubmissions] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    const getData = async () => {
      if (isEqual(user, {})) {
        navigate('/auth/login', { replace: true })
      } else {
        const results = await submissionAPI.getSubmissions()
        let filtered = await Promise.all(
          results.data.map(async (result) => {
            let teamrequest = await teamsAPI.getTeamById(result.team_id)
            let teamName = teamrequest.data.name
            let teamScore = 0

            if (
              result.submission_parts.backend !== undefined &&
              result.submission_parts.frontend !== undefined
            ) {
              teamScore =
                result.submission_parts.backend.points + result.submission_parts.frontend.points
            } else if (result.submission_parts.backend !== undefined) {
              teamScore = result.submission_parts.backend.points
            } else if (result.submission_parts.frontend !== undefined) {
              teamScore = result.submission_parts.frontend.points
            }

            return { teamName, teamScore }
          }),
        )

        filtered.sort((a, b) => b.teamScore - a.teamScore)

        setSubmissions(filtered)

        setUpdating(false)
      }
    }

    getData()
  }, [])

  return (
    <Container>
      <TopTemplate />
      <Content>
        {updating ? (
          <div>
            <InfinitySpin width="150px" color="#4fa94d" />
          </div>
        ) : (
          <BaseContainer>
            <TextCTA>
              <Text fontWeight="700" fontSize="25px" color="#5D9D0B" marginAll="0 0 30px 0">
                Leaderboard
              </Text>
            </TextCTA>

            <InfoContainer>
              <Text fontWeight="600" color="#5D9D0B">
                TOP
              </Text>
              <Text fontWeight="600" color="#5D9D0B">
                TEAM
              </Text>
              <Text fontWeight="600" color="#5D9D0B">
                SCORE
              </Text>
            </InfoContainer>

            {submissions.map((item, i) => (
              <InfoContainer key={i}>
                <Text fontWeight="600" color="#FFE600">
                  #{i}
                </Text>
                <Text fontWeight="600" color="#FFE600">
                  {item.teamName}
                </Text>
                <Text fontWeight="600" color="#FFE600">
                  {item.teamScore}
                </Text>
              </InfoContainer>
            ))}
          </BaseContainer>
        )}
      </Content>
    </Container>
  )
}

export default Leaderboard
