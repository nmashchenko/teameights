// * Modules
import styled from 'styled-components'

export const SliderContainer = styled.div`
  z-index: 400;
  position: fixed;
  bottom: 0;
  right: 0;
  margin-right: 90px;
  margin-bottom: 50px;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  @media screen and (min-width: 731px) and (max-width: 980px) {
    margin-right: 35px;
  }

  @media screen and (min-width: 400px) and (max-width: 731px) {
    margin-right: 15px;
  }

  @media screen and (min-width: 0px) and (max-width: 400px) {
    margin-right: 2px;
  }
`

export const AccessibilityContainer = styled.div`
  z-index: 400;
  position: fixed;
  bottom: 0;
  right: 0;
  margin-right: 90px;
  margin-bottom: 50px;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  border: 3px solid #72eb3a;
  border-radius: 50%;
  padding: 5px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #72eb3a;
  font-weight: 700;
  font-size: 18px;
  user-select: none;
  transform: ${(props) => (props.show ? 'rotate(180deg)' : 'rotate(0deg)')};

  @media screen and (min-width: 731px) and (max-width: 980px) {
    margin-right: 35px;
  }

  @media screen and (min-width: 400px) and (max-width: 731px) {
    margin-right: 15px;
  }

  @media screen and (min-width: 0px) and (max-width: 400px) {
    margin-right: 2px;
  }
`

export const AccessibilityWindow = styled.div`
  width: 200px;
  height: auto;
  background-color: #2e3239;
  position: fixed;
  bottom: 50%;
  right: ${(props) => (props.show ? '0%' : '-50%')};
  transform: translateY(50%);
  transition: all 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  p {
    text-align: center;
    cursor: pointer;
  }
  z-index: 999;
`

export const ScrollbarOn = styled.p`
  transition: all 0.2s;
  font-weight: 700;
  font-size: 16px;
  color: ${(props) => (props.isOn ? '#72eb3a' : '#FFF')};
  user-select: none;
`
