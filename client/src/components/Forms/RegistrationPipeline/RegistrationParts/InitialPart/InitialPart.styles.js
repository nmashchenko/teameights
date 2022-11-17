// * Modules
import styled from 'styled-components'

// * Constants
import { BLACK, WHITE, GREEN } from '../../../../../constants/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 88px);
  width: 100%;
  background: ${BLACK.background};
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 770px;
  height: 470px;
  background: ${BLACK.cardContainer};
  border-radius: 25px;
  margin-bottom: 78px;
  box-shadow: 0px 5px 50px rgba(0, 0, 0, 0.1);
`

export const TopText = styled.h3`
  font-size: ${(props) => props.fontSize || '18px'};
  font-weight: ${(props) => props.fontWeight || '700'};
  margin: ${(props) => props.margin || '0'};
  color: ${WHITE.main};
  text-align: center;
`

export const MiddleTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 550px;
  width: 100%;
`

export const ContinueButton = styled.button`
  font-weight: 600;
  font-size: 16px;
  margin-top: 80px;
  border: none;
  width: 271px;
  height: 50px;
  color: ${WHITE.main};
  background: ${GREEN.button};
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    transition: 0.3s ease-in-out;
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
    transform: scale(1.05);
  }
`
