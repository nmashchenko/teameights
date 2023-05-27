import { useNavigate } from 'react-router-dom'

import TeameightsLogo from '../../../assets/Platform/TeameightsLogo'
import { H4fs, H4fw, H4lh } from '../../../constants/fonts.js'

import {
  GridContainer,
  LogoContainer,
  SelectType,
  Text,
  Textbox,
} from './TeamsTopTemplate.styles.js'

const TeamsTopTemplate = ({ myTeam }) => {
  const navigate = useNavigate()

  return (
    <GridContainer>
      {/* <LogoContainer>
        <TeameightsLogo />
      </LogoContainer> */}
      <SelectType>
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
      </SelectType>
    </GridContainer>
  )
}

export default TeamsTopTemplate
