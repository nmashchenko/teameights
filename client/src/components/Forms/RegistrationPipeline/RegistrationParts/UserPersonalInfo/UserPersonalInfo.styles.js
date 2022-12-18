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
  min-height: 100vh;
`

export const RegistrationContainer = styled.div`
  width: 100%;
  background: ${BLACK.background};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-grow: 1;
`

export const ContentContainer = styled.div`
  flex-grow: 1;
`

export const GroupContainer = styled.div`
  display: flex;
`

export const SectionContainer = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;
  align-items: start;
  margin: ${(props) => props.margin || '80px 0 0 40px'};
`

export const AboutMeContainer = styled.div`
  margin: 80px 0 0 40px;
  width: calc(100% - 300px);
`

export const Input = styled.input`
  outline: 0;
  border-width: 0 0 1.5px;
  border-color: ${(props) => props.borderColor || '#4b4b4b'};
  background: inherit;
  width: ${(props) => props.width || '240px'};
  height: ${(props) => props.height || '40px'};
  font-size: 18px;
  margin: ${(props) => props.margin || '16px 0 0 0'};
  color: ${WHITE.main};
  animation-name: ${(props) => props.animation || shake};
  animation-duration: 0.3s;

  &:focus {
    border-color: ${WHITE.main};
  }
`

export const TextArea = styled.textarea`
  margin-top: 10px;
  height: 180px;
  width: 100%;
  padding: 12px 20px;
  box-sizing: border-box;
  border: ${(props) => props.border || `1px solid #4b4b4b`};
  color: ${WHITE.main};
  border-radius: 5px;
  background: inherit;
  font-size: 16px;
  resize: none;
  animation-name: ${(props) => props.animation || shake};
  animation-duration: 0.3s;
`

export const Text = styled.h3`
  font-size: ${(props) => props.fontSize || '18px'};
  font-weight: ${(props) => props.fontWeight || '500'};
  margin: ${(props) => props.margin || '0'};
  color: white;
`

export const ButtonContainer = styled.div`
  margin: 40px 0 0 40px;
  width: calc(100% - 300px);
  display: flex;
  justify-content: space-between;
`

export const ResetButton = styled.button`
  border: none;
  background: inherit;
  color: ${WHITE.main};
  outline: none;
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 30px;
  cursor: pointer;

  &:hover {
    cursor: pointer;
    -webkit-transform: scale(1.02);
    -ms-transform: scale(1.02);
    transform: scale(1.02);
  }
`

export const Button = styled.button`
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 30px;
  border: none;
  width: 170px;
  height: 49px;
  color: ${WHITE.main};
  background: ${GREEN.button};
  border-radius: 5px;
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
  display: flex;
  justify-content: end;
`

export const WordsCounter = styled.span`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  color: ${(props) => props.color || WHITE.main};
`
