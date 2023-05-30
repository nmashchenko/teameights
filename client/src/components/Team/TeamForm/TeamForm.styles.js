import styled from 'styled-components'

import { BLACK, GREEN, WHITE } from '../../../constants/colors'
import { B2fs, B2fw, B2lh, B3fs, B3fw, B3lh } from '../../../constants/fonts'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background: ${BLACK.background};
  padding-left: 88px;
`

export const CardContainer = styled.div`
  min-height: 100vh;
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

export const UserAccordionCard = styled.div`
  display: flex;
  font-size: ${B2fs};
  font-weight: ${B2fw};
  line-height: ${B2lh};
  align-items: center;
  gap: 8px;
  &:hover {
    background-color: #2f3239;
    cursor: pointer;
  }
  height: 32px;
  padding: 4px 8px 4px 16px;
  color: white;
`

export const UserAccordionImg = styled.img`
  width: 28px;
  height: 28px;
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

export const LeaveJoinTeam = styled.button`
  width: 100%;
  height: ${(props) => props.height || '44px'};
  background: ${(props) => props.background || 'transparent'};
  border: ${(props) => props.border || ' 2px solid #a5211f'};
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  color: white;
  outline: none;
  margin-top: ${(props) => props.marginTop || '24px'};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${(props) => props.boxShadow || '0px 2px 25px #a5211f60'};
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
  border: 2px solid #46a11b;
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
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 2px 25px #46a11b60;
  }
`

export const CreateButton = styled.button`
  width: 100%;
  height: 44px;
  background: #46a11b;
  opacity: ${(props) => props.color};
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  color: white;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
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
  color: ${(props) => props.color || '#86878b'};
  svg,
  svg path,
  svg circle {
    stroke: ${(props) => props.color || '#86878b'};
  }
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

  &:hover {
    svg {
      path {
        stroke: #d42422;
      }
    }
  }
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
  font-size: 20px;
  font-weight: 500;

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
  border: 1px solid #5bd424;
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
  ${'' /* width: 101px; */}
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

export const TeamButton = styled.button`
  width: 306px;
  height: 44px;
  background: ${(props) => props.background || 'transparent'};
  border: ${(props) => props.border || '2px solid #46a11b'};
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  color: white;
  outline: none;
  margin-top: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 2px 25px #46a11b60;
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
  right: -5%;
  bottom: 19%;
  cursor: pointer;
  background: #46a11b;
  border-radius: 50%;
  border: none;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
  opacity: ${(props) => (props.editImage ? '0' : '1')};
  svg {
    width: 20px;
    height: 20px;
  }
`

export const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '370px',
  height: '350px',
  bgcolor: '#1A1C22',
  borderRadius: '15px',
  boxShadow: 14,
  padding: 4,
  backdropFilter: 'blur(5px)',
}
