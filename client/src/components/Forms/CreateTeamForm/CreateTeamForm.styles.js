// * Modules
import styled, { createGlobalStyle } from 'styled-components'

// * Constants
import { WHITE, BLACK, GREEN, BLUE, DARK_BLUE } from '../../../constants/colors'

export const CreateTeamContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background: ${BLACK.background};
`

export const TopBar = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width 100%;
  margin-top: 2%;
`

export const TopBarContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
`

export const ClickableText = styled.div`
  font-family: 'NoirPro-Regular';
  font-size: 18px;
  line-height: 21px;
  color: ${WHITE.main};
  cursor: pointer;
`

export const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${WHITE.main};
  background: ${DARK_BLUE.background};
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
  border-radius: 15px;

  margin: 175px 340px 175px 340px;

  width: 45%;
  height: 55%;
`

export const XContainer = styled.div`
  cursor: pointer;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-top: 15px;
  margin-right: 15px;
  margin-bottom: 15px;
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
  bottom: 30px;
`

export const TeamNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #828282;
  margin-top: 50px;
  width: 250px;
  height: 26px;
`

export const Text = styled.div`
  color: #828282;
  height: 23px;
`

export const Line = styled.div`
  width: 250px;
  height: 0px;
  border: 1px solid rgba(93, 157, 11, 0.5);
`

export const ChooseCountryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #828282;
  margin-top: 30px;
  width: 250px;
  height: 26px;
`

export const DropDownIconContainer = styled.div`
  position: relative;
  margin-left: auto;
  bottom: 22px;
  width: 9px;
  height: 5px;
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
