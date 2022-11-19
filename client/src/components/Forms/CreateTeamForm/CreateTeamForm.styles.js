// * Modules
import styled, { createGlobalStyle } from 'styled-components'

// * Constants
import { WHITE, BLACK, GREEN, BLUE, DARK_BLUE } from '../../../constants/colors'

export const CreateTeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${BLACK.background};
  height: 100vh;
  width: 100%;
`

export const Card = styled.div`
  height: calc(100vh - 78px);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ClickableText = styled.div`
  font-family: 'NoirPro-Regular';
  font-size: 18px;
  line-height: 21px;
  color: ${WHITE.main};
  cursor: pointer;
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${WHITE.main};
  background: ${DARK_BLUE.background};
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  width: 600px;
  height: 450px;
  padding: 10px 10px;
`

export const XContainer = styled.div`
  cursor: pointer;
  width: 90%;
  height: 24px;
  display: flex;
  justify-content: end;
  align-items: end;
  margin: 15px 0 0 0;
`

export const ProfileContainer = styled.div``

export const CrownContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  top: 20px;
  left: 80px;
  transform: rotate(32.31deg);
`

export const ProfileEditContainer = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  left: 90px;
  bottom: 40px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #828282;
  margin-top: 20px;
  width: 250px;
  height: 26px;
`

export const CreateButtonContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 170px;
  height: 45px;
  color: ${WHITE.main};
  background: ${GREEN.button};
  box-shadow: 0px 0px 50px rgba(93, 157, 11, 0.15);
  border-radius: 10px;

  margin-left: auto;
  margin-top: auto;
  margin-right: 30px;
  margin-bottom: 30px;
`

export const Input = styled.input`
  outline: 0;
  border-width: 0 0 1.5px;
  border-color: ${(props) => props.borderColor || 'rgba(93, 157, 11, 0.5)'};
  background: inherit;
  width: ${(props) => props.width || '250px'};
  height: ${(props) => props.height || '40px'};
  font-size: 18px;
  margin: ${(props) => props.margin || '16px 0 0 0'};
  color: ${WHITE.main};

  &:focus {
    border-color: ${WHITE.main};
  }
`
