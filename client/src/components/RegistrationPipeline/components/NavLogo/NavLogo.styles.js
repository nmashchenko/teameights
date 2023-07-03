// * Modules
import styled from 'styled-components'

// * Constants
import { GREEN } from '../../../../constants/colors'
import { Text } from '../../../../shared/styles/Tpography.styles'

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`

export const SectionName = styled(Text)`
  font-size: 2rem;
  color: ${GREEN.text};
  line-height: 120%;
  display: flex;
  gap: 5px;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    gap: 0;
  }

  @media screen and (max-width: 600px) {
    font-size: 24px;
  }
`

export const SectionNameOptionalText = styled.span`
  color: #86878b;
  font-size: 16px;
  font-weight: 400;
`
