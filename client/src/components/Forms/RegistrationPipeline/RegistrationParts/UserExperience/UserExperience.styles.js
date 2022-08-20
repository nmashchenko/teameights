// * Modules
import styled, { keyframes } from 'styled-components'

// * Constants
import { BLACK, WHITE, GREEN, GREY, RED } from '../../../../../constants/colors'

const shake = keyframes`
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
`

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
  color: ${(props) => props.color || WHITE.main};
  opacity: ${(props) => props.opacity || '1'};
  text-align: ${(props) => props.align || 'none'};
`

export const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ExperienceContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.gap || '55px'};
  margin-top: 25px;
`

export const ExperienceButton = styled.button`
  font-weight: 700;
  font-size: 16px;
  border: ${(props) => props.border || `1px solid ${GREEN.alternativeBorder}`};
  width: 85px;
  height: 35px;
  color: ${WHITE.main};
  background: none;
  border-radius: 5px;
  cursor: pointer;
  animation-name: ${(props) => props.animation || shake};
  animation-duration: 0.3s;

  &:hover {
    cursor: pointer;
    -webkit-transform: scale(1.02);
    -ms-transform: scale(1.02);
    transform: scale(1.02);
  }
`

export const ExperienceButtonClicked = styled.button`
  font-weight: 700;
  font-size: 16px;
  width: 85px;
  height: 35px;
  color: ${WHITE.main};
  background: ${GREEN.alternativeBorder};
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    cursor: pointer;
    -webkit-transform: scale(1.02);
    -ms-transform: scale(1.02);
    transform: scale(1.02);
  }
`

export const AlertContainer = styled.div`
  width: 70%;
`

export const Line = styled.hr`
  width: 100%;
  opacity: 0.25;
  border: ${(props) => props.border || '1px solid #72eb3a'};
  animation-name: ${(props) => props.animation || shake};
  animation-duration: 0.3s;
`

export const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 15px;
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

export const ButtonDisabled = styled.button`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 30px;
  border: none;
  width: 100px;
  height: 40px;
  color: ${WHITE.main};
  background: ${RED.alert};
  opacity: 0.3;
  border-radius: 25px;
  cursor: not-allowed;
`
