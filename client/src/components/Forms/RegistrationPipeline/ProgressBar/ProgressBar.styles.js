import styled, { keyframes } from 'styled-components'
import { device } from '../../../../constants/breakpoints'

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

export const ProgressBarContainer = styled.div`
  display: flex;
  background-color: #d8d8d8;
  border-radius: 20px;
  position: relative;
  margin: 0px 0 15px 0;
  height: 30px;
  width: 500px;

  
  @media ${device.tablet} { 
    max-width: 415px;
  }

  @media ${device.mobileL} { 
    max-width: 325px;
  }
`

export const ProgressDone = styled.div`
  background: linear-gradient(13deg,#17b94b,#39a59d,#e0ff00,#5d5d5a);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  background-size: 240% 240%;
  animation: ${linearGradient} 10s ease infinite;
  border-radius: 20px;
  color: #fff;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 0;
  opacity: 0;
  transition: 1s ease 0.3s;
`