import styled from 'styled-components'

const StyledFlexWrapper = styled.div`
  display: flex;
  align-items: ${(props) => props.align || 'normal'};
  justify-content: ${(props) => props.justify || 'normal'};
  gap: ${(props) => props.gap || 0};
  margin: ${(props) => props.margin || 0};
  padding: ${(props) => props.padding || 0};
  flex-direction: ${(props) => props.direction || 'row'};
`

const FlexWrapper = (props) => {
  return <StyledFlexWrapper {...props} />
}

export default FlexWrapper
