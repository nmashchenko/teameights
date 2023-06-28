import styled from 'styled-components'

const StyledTag = styled.div`
  font-family: 'Rubik';
  cursor: pointer;
  padding: 6px 8px;
  background: #2f3239;
  border-radius: 5px;
  font-size: 14px;
  line-height: 120%;
  border-radius: 5px;
  color: #c1c1c4;
`

const Tag = (props) => {
  return <StyledTag {...props} />
}

export default Tag
