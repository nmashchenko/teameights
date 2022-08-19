// * Modules
import styled, { keyframes } from 'styled-components'

// * Constants
import { BLACK, WHITE, GREEN, GREY, RED } from '../../../../../constants/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 85px);
  width: 100%;
  background: ${BLACK.background};
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 770px;
  height: 420px;
  padding: 20px 25px;
  background: ${BLACK.cardContainer};
  border-radius: 25px;
  margin-bottom: 78px;
  margin-top: 50px;
  box-shadow: 0px 5px 50px rgba(0, 0, 0, 0.1);
`

export const TopContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid ${BLACK.line} !important;
`

export const Text = styled.h3`
  font-size: ${(props) => props.fontSize || '18px'};
  font-weight: ${(props) => props.fontWeight || '500'};
  margin: ${(props) => props.margin || '0'};
  color: ${WHITE.main};
`

export const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ConcetrationContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${(props) => props.margin || '0'};
`

export const Line = styled.hr`
  width: 100%;
  opacity: 0.25;
  border: 1px solid #72eb3a;
`

export const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  margin-top: 5px;
`

export const Button = styled.button`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 30px;
  border: none;
  width: 100px;
  height: 40px;
  color: ${WHITE.main};
  background: ${GREEN.button};
  border-radius: 25px;
  cursor: pointer;

  &:hover {
    cursor: pointer;
    -webkit-transform: scale(1.02);
    -ms-transform: scale(1.02);
    transform: scale(1.02);
  }
`
