// * Modules
import styled, { keyframes } from 'styled-components'

// * Constants
import { LIME, BLACK, WHITE } from '../../../../../constants/colors'
import { device } from '../../../../../constants/breakpoints'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-items: center;
  height: 93.4vh;
  width: 100%;
  background: ${LIME.background};
`
const linearGradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 0 50px 0;
  max-width: 645px;
  width: 100%;
  max-height: 363px;
  height: 100%;
  background: linear-gradient(13deg, #17b94b, #39a59d, #e0ff00, #5d5d5a);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  background-size: 240% 240%;
  animation: ${linearGradient} 10s ease infinite;
  border-radius: 13px;

  @media ${device.tablet} {
    max-width: 500px;
    max-height: 300px;
    margin: 40px 0 40px 0;
  }

  @media ${device.mobileL} {
    max-width: 355px;
    max-height: 300px;
    margin: 35px 0 35px 0;
  }

  @media ${device.mobileM} {
    max-width: 335px;
    max-height: 300px;
    margin: 30px 0 30px 0;
  }
`

export const TopText = styled.h3`
  font-size: ${(props) => props.fontSize || '18px'};
  font-weight: ${(props) => props.fontWeight || '700'};
  margin: ${(props) => props.margin || '0 0 10px 0'};
  color: ${BLACK.main};
  text-align: center;

  @media ${device.tablet} {
    font-size: calc(${(props) => props.fontSize || '18px'} - 1px);
  }

  @media ${device.mobileL} {
    font-size: calc(${(props) => props.fontSize || '18px'} - 2px);
  }
`

export const MiddleTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 450px;
  width: 100%;

  @media ${device.tablet} {
    max-width: 247px;
    text-align: center;
  }

  @media ${device.mobileL} {
    max-width: 247px;
    text-align: center;
  }
`

export const ContinueButton = styled.button`
  font-weight: 600;
  font-size: 16px;
  margin-top: 36px;
  border: none;
  width: 350px;
  height: 40px;
  color: ${WHITE.main};
  background: ${BLACK.main};
  border-radius: 9px;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
    transition: 0.3s ease-in-out;
  }

  @media ${device.tablet} {
    max-width: 247px;
  }

  @media ${device.mobileL} {
    max-width: 247px;
  }
`

export const InputField = styled.input`
  background: ${LIME.background};
  border: 0;
  outline: none;
  max-width: 350px;
  width: 100%;
  height: 40px;
  border-radius: 16px;
  font-size: 18px;
  margin-top: 15px;
  text-align: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
`
