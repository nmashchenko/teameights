import styled from "styled-components";
import {BLACK, GREEN, RED, WHITE} from "../../../../../constants/colors";

export const RegistrationContainer = styled.div`
  width: 100%;
  background: ${BLACK.background};
  display: flex;
  flex-direction: column;
`

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
`


export const ResetButton = styled.button`
  border: none;
  background: inherit;
  color: ${WHITE.main};
  outline: none;
  font-weight: 400;
  font-size: 18px;
  margin-top: .8rem;
  cursor: pointer;
  align-self: flex-start;
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
  margin-bottom: ${(props) => props.marginBottom || '30px'};
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

export const ButtonContainer= styled.div`
  margin-top: 3rem;
`

export const ButtonsContainer= styled.div`
  width: 100%;
  display: flex;
  justify-content: ${(props) => props.justifyContent || 'space-between'};
  margin-top: ${(props) => props.marginTop || '3rem'};
  align-items: center;
`

export const ContentContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: calc(100vh - 185px);
  align-items: ${(props) => props.alignItems || 'center'};
`