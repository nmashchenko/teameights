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
`

export const RegistrationContainer = styled.div`
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

export const MiddleContainer = styled.div`
  display: flex;
  width: 100%;
  height: 90%;
  margin-top: 25px;
`

export const LeftContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Input = styled.input`
  border: ${(props) => props.border || `1px solid ${GREEN.alternativeBorder}`};
  background: inherit;
  outline: none;
  width: ${(props) => props.width || '240px'};
  height: ${(props) => props.height || '40px'};
  border-radius: 5px;
  font-size: 18px;
  margin: ${(props) => props.margin || '10px 0 30px 0'};
  padding-left: 10px;
  color: ${WHITE.main};
  animation-name: ${(props) => props.animation || shake};
  animation-duration: 0.3s;

  &:focus {
    border: 1px solid ${WHITE.main};
  }
`

export const TextArea = styled.textarea`
  margin-top: 10px;
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: ${(props) => props.border || `1px solid ${GREEN.alternativeBorder}`};
  color: ${WHITE.main};
  border-radius: 5px;
  background: inherit;
  font-size: 16px;
  resize: none;
  animation-name: ${(props) => props.animation || shake};
  animation-duration: 0.3s;
`

export const RightContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const Text = styled.h3`
  font-size: ${(props) => props.fontSize || '18px'};
  font-weight: ${(props) => props.fontWeight || '500'};
  margin: ${(props) => props.margin || '0'};
  color: ${WHITE.main};
`

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`

export const Button = styled.button`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 30px;
  border: none;
  width: 180px;
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
  width: 180px;
  height: 40px;
  color: ${WHITE.main};
  background: ${RED.alert};
  opacity: 0.3;
  border-radius: 25px;
  cursor: not-allowed;
`

export const WordsCounterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`

export const WordsCounter = styled.span`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  color: ${(props) => props.color || WHITE.main};
`
