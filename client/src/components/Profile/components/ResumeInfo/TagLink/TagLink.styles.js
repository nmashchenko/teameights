import styled from 'styled-components'

export const TagText = styled.p`
  font-weight: 300;
  font-size: 14px;
`

export const StyledTagLink = styled.button`
  cursor: pointer;
  display: flex;
  gap: 6px;
  align-items: center;
  padding: 5px 8px;
  background-color: #2f3239;
  border-radius: 5px;
  transition: opacity 0.3s;
  outline: none;
  border: none;
  color: white;
  &:hover {
    opacity: 0.8;
  }
`
