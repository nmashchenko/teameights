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
`

export const Card = styled.div`
  width: 980px;
  height: 600px;
  background: #1a1c22;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`

export const MainCardContent = styled.div`
  display: flex;
  width: 100%;
  gap: 30px;
  justify-content: center;
  align-items: center;
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
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  row-gap: 40px;
  align-items: start;
`

export const UserCard = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
`

export const UserImg = styled.img`
  width: 82px;
  height: 82px;
  border-radius: 50%;
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
`

export const RightContainer = styled.div`
  height: 453px;
  width: 366px;
  display: flex;
  border-radius: 15px;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  background: #26292b;
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
  width: 253px;
  height: 253px;
  border-radius: 50%;
`

export const CreateButton = styled.button`
  width: 146px;
  height: 44px;
  background: rgba(93, 157, 11, 0.5);
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
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
  width: 400,
  bgcolor: '#26292B',
  borderRadius: '15px',
  boxShadow: 14,
  p: 4,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '25px',
}

export const Input = styled.input`
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
