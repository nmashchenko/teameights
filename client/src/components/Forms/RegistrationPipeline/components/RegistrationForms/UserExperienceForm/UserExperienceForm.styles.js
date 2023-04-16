import styled from 'styled-components'
import { Text } from '../../../../../../shared/styles/Tpography.styles'

export const QuestionSection  = styled.div`
  display: flex;
  flex-direction: column;
`

export const QuestionText = styled(Text)`
  margin-bottom: 1.5rem;
  font-size: 24px;
`

export const NoteContainer = styled.div`
  width: 70%;
`

export const NoteText = styled(Text)`
  font-weight: 200; 
  opacity: 0.4;
  margin-top: 2.25rem;
`