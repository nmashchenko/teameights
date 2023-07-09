import styled from 'styled-components'

import { BLACK, WHITE } from '../../../constants/colors'
import { B2fs, B2fw, B2lh } from '../../../constants/fonts'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${BLACK.background};
  padding-left: 88px;

  @media screen and (max-width: 768px) {
    padding: 0 25px;
  }
`

export const CardContainer = styled.div`
  min-height: 100dvh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  @media screen and (max-width: 1024px) {
    justify-content: start;
    margin: 96px 0 24px 0;
    flex-direction: column-reverse;
    padding: 0 24px;
    min-height: 0;
  }
`

export const Card = styled.div`
  width: 570px;
  height: 400px;
  background: #1a1c22;
  border-radius: 15px;
  gap: ${(props) => props.gap || '16px'};
  padding: 24px 32px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    max-width: 570px;
    width: 100%;
    position: static;
    overflow-y: scroll;
    height: 100%;
    padding: 24px 24px;

    ::-webkit-scrollbar {
      /* WebKit */
      transition: all 0.2s;
      width: 5px;
      /* height: auto; */
    }
    ::-webkit-scrollbar-track {
      background: transparent;
      margin-top: 10px;
      margin-bottom: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #5d9d0b;
      border-radius: 10px;
    }
  }
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
  margin: ${(props) => props.margin || '0'};
  text-align: ${(props) => props.textAlign || 'left'};
  /* line-height: ${(props) => props.lineHeight || '1'}; */
`

export const GenericButton = styled.button`
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
  display: flex;
  justify-content: center;
  opacity: ${(props) => (props.disabled ? '0.4' : '1')};
  align-items: center;
  &:hover {
    transform: translateY(-1.25px);
  }
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

export const UserPlusContainer = styled.div`
  width: 20px;
  height: 20px;
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
`

export const FormikContainer = styled.div`
  label {
    font-size: ${B2fs};
    line-height: ${B2lh};
    font-weight: ${B2fw};
  }
`

export const HidableWrapper = styled.div`
  display: ${(props) => props.display || 'none'};
`
