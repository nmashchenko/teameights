import styled from 'styled-components'

import { BLACK, GREEN, WHITE } from '../../../constants/colors'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background: ${BLACK.background};
`

export const CardContainer = styled.div`
  min-height: calc(100vh - 78px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`

export const Card = styled.div`
  width: 700px;
  height: 425px;
  background: #1a1c22;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  position: relative;
  padding: 64px 0;
`

export const MainCardContent = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  // padding: 24px 32px;
`

export const ButtonCardContent = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`

export const LeftContainer = styled.div`
  width: 50%;
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  row-gap: 40px;
  align-items: start;
`

export const UserGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: start;
  justify-items: start;
  align-items: start;
  align-content: start;
  column-gap: 45px;
  row-gap: 32px;
  padding: 40px;
  margin-top: 175px;
`

export const UserCard = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
`

export const UserImg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
`

export const RightContainer = styled.div`
  padding: 48px 24px 24px 24px;
  height: 480px;
  width: 300px;
  display: flex;
  border-radius: 15px;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  background: #26292b;
  background: #1a1c22;
`

export const CircleContainer = styled.div`
  width: 181px;
  height: 38px;
  justify-content: center;
  justify-items: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  border-radius: 13px;
  border: 1px solid #a1a1a1;
`

export const Text = styled.h3`
  font-weight: ${(props) => props.fontWeight || '500'};
  font-size: ${(props) => props.fontSize || '18px'};
  color: ${(props) => props.color || WHITE.main};
  text-align: ${(props) => props.alignment || 'center'};
  margin: ${(props) => props.margin || '0'};
`

export const TeamImgBorder = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`

export const LeaveTeam = styled.button`
  width: 100%;
  height: 44px;
  background: transparent;
  border: 2px solid #A5211F;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  color: white;
  outline: none;
  margin-top: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap 6px;

  cursor: pointer;

  transition: all .2s;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 2px 25px  #a5211f60;
  }

`
export const CancelButton = styled.button`
  width: 100%;
  height: 44px;
  background: transparent;
  border: 2px solid #46A11B;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  color: white;
  outline: none;
  margin-top: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap 6px;

  cursor: pointer;

  transition: all .2s;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 2px 25px  #46A11B60;
  }


`

export const CreateButton = styled.button`
  width: 100%;
  height: 44px;
  background: #46A11B;
  opacity: .4;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  color: white;
  border: none;
  outline: none;
  margin-top: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap 6px;


  cursor: pointer;
  &:hover {
    svg path:nth-child(3),
    svg path:nth-child(4) {
      transform: translateY(-2px);
      transition: all 0.2s;
    }
  }
`

export const ActionButton = styled.button`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: #25282a;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 370,
  height: 350,
  bgcolor: '#1A1C22',
  borderRadius: '15px',
  boxShadow: 14,
  p: 4,
}

export const InputBox = styled.div`
  display: flex;

  border: 1px solid #86878b;
  border-radius: 10px;
  align-items: center;
  gap: 14px;
  margin-top: 33px;
  padding: 9px 12px;
`

export const SearchIconContainer = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;
  color: #86878b;
  svg,
  svg path,
  svg circle {
    stroke: #86878b;
  }
`
export const CloseContainer = styled.div`
  position: absolute;
  cursor: pointer;
  svg {
    width: 18px;
    height: 18px;
  }

  right: 5%;
  top: 5%;
`

export const Input = styled.input`
  margin: 0;
  outline: 0;
  border: none;
  background: transparent;
  font-size: 16px;
  width: 100%;
  color: #fff;

  &:focus {
    border-color: ${WHITE.main};
  }
`

export const CakeBox = styled.div`
  display: flex;
  align-items: center;
`

export const SVGAndText = styled.div`
  display: flex;
  gap: 4px;
`

export const TabContainer = styled.div`
  display: flex;
  gap: 16px;
  font-size: 20px;
  justify-content: start;
  position: ${(props) => (props.about ? 'absolute' : 'relative')};
  top: 0%;
  margin-left: 36px;
  margin-top: 15px;
  span {
    width: 100%;
    height: 2px;
    color: #fff;
    background-color: #fff;
  }
`
export const Tab = styled.p`
  color: ${(props) => (!props.isMembers ? '#fff' : '#5BD424')};
  cursor: pointer;

  transition: all 0.2s;
  display: inline-block;
  position: relative;

  span {
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: -20%;
    left: 50%;
    background-color: #5bd424;
    transition: all 0.2s;
    transform: translateX(-50%) ${(props) => (props.isMembers ? `scaleX(100%)` : `scaleX(0)`)};
  }
`

export const InviteButton = styled.button`
  margin-top: 15px;
  height: 40px;
  border: 2px solid #5bd424;
  color: #fff;
  background: transparent;
  padding: 4px 16px 4px 16px;
  cursor: pointer;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 6px;
  transform: translateX(300px);
  font-size: 20px;

  transition: all 0.2s;

  &:hover {
    // background: #2f3239;
    svg path:nth-child(3),
    svg path:nth-child(4) {
      transform: translateY(-2px);
      transition: all 0.2s;
    }
  }
`
export const UserPlusContainer = styled.div`
  width: 24px;
  height: 24px;
  margin-top: 4px;
`
// stolen from TeamCards

export const TeamCardFigure = styled.figure`
  background-color: transparent;
  padding: 0 32px 24px 32px;
  margin: 0;
  // position: absolute;
  // left: 50%;
  // top: 50%;
  // transform: translate(-50%, -50%);
`

export const TeamCardTop = styled.div`
  display: flex;
  gap: 18px;
  transform: translateY(-50%);
`
export const TeamCardTopInfo = styled.div`
  // &:nth-child(1) {
  //   width: 140px;
  // }
  // &:nth-child(2) {
  //   width: 60px;
  // }
  // &:nth-child(3) {
  //   width: 100px;
  // }
  // &:nth-child(4) {
  //   width: 140px;
  // }

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  h3 {
    font-size: 17px;
    color: #86878b;
    font-weight: 400;
  }

  p {
    font-size: 16px;
    color: #fff;
  }
`

export const TeamCardTopIcon = styled.img`
  width: 75px;
  height: 75px;
  margin-left: auto;
`

export const TeamCardBody = styled.div`
  diplay: flex;
  flex-direction: column;
  gap: 40px;
  background-color: transparent;
  margin-top: 10px;
`

export const TeamCardBodyPoint = styled.div`
  h3 {
    font-size: 19px;
    color: #86878b;
    margin: 0;
    font-weight: 400;
    margin-bottom: 12px;
  }
  background-color: transparent;

  margin-bottom: 16px;

  div :not(div div) {
    display: flex;
    gap: 36px;
  }

  :nth-child(2) {
    display: flex;
    gap: 48px;
    h3 {
      margin-bottom: 8px;
    }
  }

  :nth-child(3) {
    position: absolute;
    bottom: 5%;
  }
`

export const TeamCardDesc = styled.p`
  font-size: 17px;
  color: #fff;
  line-height: 1.4;
  margin: 0;
`

export const CrownContainer = styled.div`
  position: absolute;
  transform: rotate(45deg) translate(80%, 0) scale(0.5);
`

export const TeamCardPerson = styled.div`
  display: flex;
  flex-direction: column;
`

export const TeamCardPicture = styled.img`
  width: 40px;
  height: 40px;
`

export const TeamCardMembers = styled.div`
  display: flex;
  gap: 8px;
`

export const StatisticsFlex = styled.div`
  display: flex;
  gap: 48px;
`
export const Statistic = styled.div`
  p {
    font-size: 17px;
    color: #fff;
    margin: 0;
    display: inline !important;
  }

  p span {
    margin: 0;
    color: #5bd424;
    display: inline !important;
  }
`
