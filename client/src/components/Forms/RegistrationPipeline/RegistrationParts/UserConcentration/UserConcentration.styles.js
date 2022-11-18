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
  width: 100%;
  height: calc(100vh - 91px);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`

export const Text = styled.h3`
  font-size: ${(props) => props.fontSize || '18px'};
  font-weight: ${(props) => props.fontWeight || '500'};
  margin: ${(props) => props.margin || '0'};
  color: ${(props) => props.color || WHITE.main};
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
  border: ${(props) => props.border || '1px solid #4b4b4b'};
  animation-name: ${(props) => props.animation || shake};
  animation-duration: 0.3s;
`

export const BottomContainer = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
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
  font-weight: 400;
  font-size: 18px;
  margin: 15px 0 30px 0;
  width: ${(props) => props.width || 'none'};
  padding: 15px 32px;
  border: none;
  width: 170px;
  height: 49px;
  color: ${WHITE.main};
  background: ${RED.alert};
  border-radius: 5px;
  cursor: pointer;
  opacity: 0.3;

  &:hover {
    cursor: pointer;
    -webkit-transform: scale(1.02);
    -ms-transform: scale(1.02);
    transform: scale(1.02);
  }
`
