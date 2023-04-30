import styled, { createGlobalStyle } from 'styled-components'

import { B2fs, B2fw, B2lh, B3fs, B3fw, B3lh } from '../../../assets/fonts'
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
  width: 570px;
  height: 400px;
  background: #1a1c22;
  border-radius: 15px;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // flex-direction: column;
  gap: 30px;
  position: relative;
  padding: 24px 32px;
`

export const MainCardContent = styled.div`
  height: auto;
`

export const ButtonCardContent = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`

export const LeftContainer = styled.div`
  // width: 50%;
  // display: grid;
  // margin: 0 auto;
  // grid-template-columns: repeat(2, 1fr);
  // grid-template-rows: repeat(4, 1fr);
  // row-gap: 40px;
  // align-items: start;
`

export const UserGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: start;
  justify-items: start;
  align-items: center;
  align-content: center;
  column-gap: 36px;
  row-gap: 16px;
  // padding: 40px;
  // margin-top: 175px;
`

export const UserCard = styled.div`
  display: flex;
  gap: 12px;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  transition: all 0.2s ease-in-out;
  user-select: none;
  padding: 4px;

  &:hover {
    background-color: ${(props) =>
      props.selectLeader && props.isTeamLeader ? `transparent` : '#2f3239'};
    // background-color: #2f3239;
    cursor: pointer;
  }

  &:hover div svg {
    // this gets the svg
    path {
      stroke: ${(props) => (props.isEditing && !props.isTeamLeader ? `#D42422` : '#46a11b')};
    }
    cursor: ${(props) => (props.isEditing ? `pointer` : 'initial')};
  }

  opacity: 1;
`

export const UserImg = styled.img`
  width: 50px;
  height: 50px;

  border-radius: 50%;
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  width: 100%;
  gap: 4px;
`
export const ListBackdrop = styled.figure`
  margin: 0;
  position: absolute;
  background: #2f3239;
  padding: 8px 0;
  width: 235px;
  max-height: 144px;
  overflow-y: scroll;
  // overflow-x: none;
  z-index: 10;

  transform: ${(props) => (props.selectLeader ? 'translate(-50%, 100%)' : 'translate(-50%, 50%)')};
  opacity: ${(props) => (props.selectLeader ? '1' : '0')};
  pointer-events: ${(props) => (props.selectLeader ? 'auto' : 'none')};
  transition: all 0.2s;

  left: 50%;
  bottom: 0%;
  border-radius: 5px;

  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #5d9d0b;
    border-radius: 10px;
  }
`

export const UserAccordionCard = styled.div`
  display: flex;
  font-size: ${B3fs};
  font-weight: ${B3fw};
  line-height: ${B3lh};
  align-items: center;
  gap: 8px;
  // justify-content: center;
  &:hover {
    background-color: #27431f;
  }
  height: 32px;
  padding: 4px 8px 4px 16px;
  color: white;
`

export const UserAccordionImg = styled.img`
  width: 24px;
  height: 24px;

  border-radius: 50%;
`
export const UserAccordionUsername = styled.p``

export const RightContainer = styled.div`
  padding: 48px 24px 24px 24px;
  height: 400px;
  width: 270px;
  border-radius: 15px;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background: #26292b;
  background: #1a1c22;
  position: relative;
  display: flex;
`
export const TeamInformationContainer = styled.div`
  text-align: center;
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

  line-height: ${(props) => props.lineHeight || '1'};
`

export const TeamImgBorder = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 24px;
`

export const LeaveTeam = styled.button`

  width: 100%;
  height: ${(props) => props.height || '44px'};
  background: transparent;
  border: 2px solid #A5211F;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  color: white;
  outline: none;
  margin-top: ${(props) => props.marginTop || '24px'};
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
export const EditTeam = styled.button`
  width: ${(props) => props.width || ''};
  margin-top: ${(props) => props.marginTop || '0'};
  background-color: #46a11b;
  padding: 10px 16px 8px 16px;

  font-size: ${B2fs};
  font-weight: ${B2fw};
  line-height: ${B2lh};

  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  border: none;
  transition: all 0.2s;

  box-shadow: 0px 4px 25px rgba(93, 157, 11, 0.25);
  &:hover {
    transform: translateY(-1.25px);
    box-shadow: 0px 5px 31.25px rgba(93, 157, 11, 0.3125);
  }
`

export const CancelButton = styled.button`
  width: 100%;
  height: 44px;
  background: transparent;
  border: 2px solid #46A11B;
  border-radius: 10px;
  font-size: ${B2fs};
  font-weight: ${B2fw};
  line-height: ${B2lh};
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
  // margin-top: 200px;
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

export let style = {
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
  padding: '72.5px 32px',
}

export const SpaceBetweenColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

export const InputBox = styled.div`
  display: flex;

  border: 1px solid #86878b;
  border-radius: 10px;
  align-items: center;
  gap: 14px;
  margin-top: 32px;
  padding: 9px 9px;
  input {
    font-size: ${B2fs};
    line-height: ${B2lh};
    font-weight: ${B2fw};
    width: 100%;
    height: 22px;
    border: none;
  }
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

export const SpaceBetween = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export const CaretContainer = styled.div`
  transition: all 0.2s;
  cursor: pointer;
  svg {
    cursor: pointer;
    width: 20px;
    height: 20px;
    transition: all 0.2s;

    transform: ${(props) => (props.selectLeader ? 'rotate(180deg)' : 'rotate(0)')};
    path {
      cursor: pointer;
      stroke: #fff;
    }
  }

  opacity: ${(props) => (props.isEditing ? '1' : '0')};

  transition: all 0.2s ease-in-out;
  right: 2%;
  top: 5%;
`

export const CloseContainerModal = styled.div`
  position: absolute;
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
    path {
      stroke: ${(props) => props.color || '#46A11B'};
    }
  }
  color: #fff;

  opacity: 1;

  transition: all 0.2s ease-in-out;
  right: 5%;
  top: 5%;
`

export const CloseContainer = styled.div`
  // position: absolute;
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
    path {
      fill: ${(props) => props.color || '#46A11B'};
    }
  }

  opacity: ${(props) => (props.isEditing ? '1' : '0')};

  transition: all 0.2s ease-in-out;
  right: 2%;
  top: 5%;
`

export const Input = styled.input`
  margin: 0;
  outline: 0;
  border-width: 0 0 1.5px;
  border-color: ${(props) => props.borderColor || 'rgba(93, 157, 11, 0.5)'};
  background: inherit;
  height: ${(props) => props.height || '40px'};
  font-size: 18px;
  margin: ${(props) => props.margin || '0'};
  color: ${WHITE.main};

  &:focus {
    border-color: ${WHITE.main};
  }
`

export const CakeBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SVGAndText = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin || '0'};
`

export const TabContainer = styled.div`
  display: flex;
  gap: 16px;
  font-weight: ${B2fw};
  line-height: ${B2lh};
  font-size: ${B2fs};
  justify-content: start;
  position: relative;
  top: 0%;
  span {
    width: 100%;
    height: 1px;
    color: #fff;
    background-color: #fff;
  }
`
export const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: ${(props) => (props.isMembers ? '32px' : '24px')};
`

export const Tab = styled.p`
  color: ${(props) => (!props.isMembers ? '#fff' : '#5BD424')};
  cursor: pointer;

  transition: all 0.2s;
  display: inline-block;
  position: relative;
  margin: 0;
  margin-bottom: 8px;

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
  border: 2px solid #5bd424;
  color: #fff;
  background: transparent;
  padding: 6px 16px 4px 16px;
  cursor: pointer;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: ${B2fs};
  line-height: ${B2lh};
  font-weight: ${B2fw};
  width: 101px;
  height: 32px;

  transition: all 0.2s;

  &:hover {
    svg path:nth-child(3),
    svg path:nth-child(4) {
      transform: translateY(-1px);
      transition: all 0.2s;
    }
  }
`
export const UserPlusContainer = styled.div`
  width: 20px;
  height: 20px;
`
// stolen from TeamCards

export const TeamCardFigure = styled.div`
  background-color: transparent;
  margin: 0;

  h3 {
    font-size: ${B3fs};
    line-height: ${B3lh};
    font-weight: ${B3fw};
  }
  p {
    margin: 0;
    font-size: ${B2fs};
    line-height: ${B2lh};
    font-weight: ${B2fw};
    color: #fff;
  }
`

export const TeamCardTop = styled.div`
  display: grid;
  grid-template-columns: 140px 80px 100px 140px;
  margin-bottom: 16px;
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

  // height: 47px;

  h3 {
    margin: 0;
    margin-bottom: 8px;
    color: #86878b;
  }
`

export const TeamCardTopIcon = styled.img`
  width: 75px;
  height: 75px;
  margin-left: auto;
`

export const TeamCardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: transparent;
  height: 100%;
`

export const TeamCardBodyPoint = styled.div`
  h3 {
    color: #86878b;
    margin: 0;
  }
  background-color: transparent;

  div :not(div div) {
    display: flex;
    gap: 36px;
  }
  :nth-child(1) {
    h3 {
      margin-bottom: 8px;
    }
    max-height: 100%;
  }

  :nth-child(2) {
    position: absolute;
    bottom: 5%;

    display: flex;
    gap: 8px;
    flex-direction: column;
    h3 {
      margin: 0;
    }

    margin-top: auto;
  }
`

export const TeamCardDesc = styled.p`
  color: #fff;
  line-height: 1.4;
  margin: 0;
`

export const CrownContainer = styled.div`
  position: absolute;
  width: 21px;
  height: 21px;
  transform: rotate(0deg) translate(180%, -107%);
  svg {
    width: 100%;
    height: 100%;
  }
`
export const CrownContainer2 = styled.div`
  position: absolute;
  width: 59px;
  height: 59px;
  right: -15%;
  top: -19%;
  transform: rotate(0deg);
  svg {
    width: 100%;
    height: 100%;
  }
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
    font-size: ${B2fs};
    line-height: ${B2lh};
    font-weight: ${B2fw};
    margin: 0;
    display: inline !important;
  }

  p span {
    margin: 0;
    color: #5bd424;
    display: inline !important;
  }
`

export const CreateTeam = styled.button`
 
  
width: 306px;
  height: 44px;
  background: #46A11B;
  border: none;
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
export const TeamButton = styled.button`
width: 306px;
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

export const Center = styled.div`
  position: absolute;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  a {
    text-decoration: none;
  }
`

export const LeaderActionsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  button {
    width: 107px;
    font-size: 16px;
  }

  opacity: ${(props) => (props.opacity ? '1' : '0')};
  z-index: ${(props) => (props.opacity ? '1' : '0')};
  // display: ${(props) => (props.opacity ? 'flex' : 'none')};
  pointer-events: ${(props) => (props.opacity ? 'auto' : 'none')};
`

export const FormikContainer = styled.div`
  label {
    font-size: ${B2fs};
    line-height: ${B2lh};
    font-weight: ${B2fw};
  }
`

export const EditImageButton = styled.button`
  position: absolute;
  right: 10%;
  bottom: 19%;
  cursor: pointer;
  background: #46a11b;
  border-radius: 50%;
  border: none;
  // padding: 2.4rem;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
  opacity: ${(props) => (props.editImage ? '0' : '1')};

  svg {
    width: 28px;
    height: 28px;
  }
`

export const DefaultImg = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
  &:after {
    display: block;
    content: '?';
    width: 20px;
    height: 20px;
    background-color: green;
    position: absolute;
  }
`

export const MyRadioGroup = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 15px;
  margin-bottom: 24px;
`

export const FileButton = styled.div`
  border: 2px dashed #86878b;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0;
  cursor: pointer;
  height: 184px;
`

export const ImageBox = styled.div`
  position: relative;
  opacity: ${(props) => (props.myKey ? '1' : '.50')};
  transition: all 0.2s;

  span {
    display: block;
    position: absolute;

    svg {
      width: 14.29px;
      height: 14.29px;
    }
    // background-color: green;
    right: 0%;
    bottom: 0%;

    opacity: ${(props) => (props.myKey ? '1' : '0')};
  }
`
