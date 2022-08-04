// * Modules
import styled from 'styled-components'

export const FilterSection = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`

export const TitleText = styled.h3`
  font-weight: ${(props) => props.fontWeight || '600'};
  font-size: ${(props) => props.fontSize || '17px'};
  color: ${(props) => props.color || '#FFF'};
  margin: ${(props) => props.margin || '0px'};
`

export const Line = styled.hr`
  width: 100%;
  opacity: 0.25;
  border: 1px solid #2e3239;
`
