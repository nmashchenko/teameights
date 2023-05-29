import styled from 'styled-components'

export const UsernameIconContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Button = styled.button`
  width: 100%;
  height: 44px;
  background: ${(props) => props.background || 'transparent'};
  border: ${(props) => props.border || '2px solid #46a11b'};
  border-radius: 15px;
  font-size: 16px;
  font-weight: 400;
  color: white;
  outline: none;
  margin-top: ${(props) => props.marginTop || '24px'};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: translateY(-2px);
  }
`

export const ListBackdrop = styled.div`
  margin: 0;
  padding: 8px 0;
  width: 306px;
  overflow-y: scroll;
  transition: all 0.2s;
  border-radius: 5px;
  margin-top: 24px;
  display: flex;
  flex-direction: column;

  ::-webkit-scrollbar {
    width: 5px;
    height: auto;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #5d9d0b;
    border-radius: 10px;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 100%;
`
