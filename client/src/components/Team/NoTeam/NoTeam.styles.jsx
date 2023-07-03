import styled from 'styled-components'

export const Center = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  a {
    text-decoration: none;
  }
`

export const TeamButton = styled.button`
  width: 306px;
  height: 44px;
  background: ${(props) => props.background || 'transparent'};
  border: ${(props) => props.border || '2px solid #46a11b'};
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  color: white;
  outline: none;
  margin-top: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`
