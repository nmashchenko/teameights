import styled from 'styled-components'

export const GroupItems = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 130px;
`

export const InputWrapper = styled.div`
  flex-grow: ${(props) => props.grow || '1'};
  width: ${(props) => props.width || '100%'};
`
