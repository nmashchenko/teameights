import styled from 'styled-components'
import { WHITE, BLACK, GREEN } from '../../../constants/colors'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background: ${BLACK.background};
`

export const CardContainer = styled.div`
  height: calc(100vh - 78px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 570px;
  height: 370px;
  background: #1a1c22;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  margin: 215px 355px 215px 355px;
`

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: left;
`

export const Text = styled.h3`
  font-weight: ${(props) => props.fontWeight || '500'};
  font-size: ${(props) => props.fontSize || '24px'};
  margin: ${(props) => props.margin || '0 0 0 0'};
  color: ${(props) => props.color || WHITE.main};
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 25px 0 0px;
  gap: 30px;
`

export const ButtonGeneral = styled.button`
  font-weight: 600;
  font-size: 16px;
  border: none;
  width: 133px;
  height: 45px;
  background: ${GREEN.button};
  color: ${WHITE.main};
  text-align: center;
  border-radius: 10px;
  box-shadow: 0px 4px 50px rgba(93, 157, 11, 0.15);

  &:hover {
    border: none;
    cursor: pointer;
    transition: 0.15s;
  }
`