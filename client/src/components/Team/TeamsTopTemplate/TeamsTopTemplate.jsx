import { useNavigate } from 'react-router-dom'

import { H4fs, H4fw, H4lh } from '../../../assets/fonts.js'

import { CurrentTeam, Text, Textbox } from './TeamsTopTemplate.styles.js'

const TeamsTopTemplate = ({ myTeam }) => {
  const navigate = useNavigate()

  return (
    <CurrentTeam>
      <Textbox>
        <Text
          isMyTeam={myTeam}
          onClick={() => {
            navigate('/team')
          }}
          fontSize={`${H4fs}`}
          fontWeight={`${H4fw}`}
          lineHeight={`${H4lh}`}
        >
          My Team
          <span></span>
        </Text>
      </Textbox>
      <Textbox>
        <Text
          onClick={() => {
            navigate('/teams')
          }}
          fontSize={`${H4fs}`}
          fontWeight={`${H4fw}`}
          lineHeight={`${H4lh}`}
          isMyTeam={!myTeam}
        >
          All Teams
          <span></span>
        </Text>
      </Textbox>
    </CurrentTeam>
  )
}

export default TeamsTopTemplate
