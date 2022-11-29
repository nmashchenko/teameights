import styled from 'styled-components'
import { WHITE, BLACK, GREEN } from '../../../constants/colors'

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background: ${BLACK.background};
`

export const Container = styled.div`
  width: 980px;
  height: 600px;
  background: #1a1c22;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-items: center;
  align-items: center;
`

export const LeftContainer = styled.div`
  width: 500px;
  height: 550px;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  justify-items: start;
  align-items: start;
`

export const MiniProfile = styled.div`
  width: 200px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  justify-items: start;
  align-items: start;
  margin: 30px 30px 30px 30px;
`

export const ProfileImgBorder = styled.div`
  width: 200px;
  height: 100px;
  justify-content: center;
  justify-items: center;
  align-items: center;
  background: #D9D9D9;
  border-radius: 20px;
`

export const ProfileTextDiv = styled.div`
  margin: 0 0 0 20px;
`

export const DevName = styled.h1`
  width: 150px;
  height: 16px;
  font-style: italic;
  font-weight: 100;
  font-size: 13px;
  line-height: 16px;
  color: #A1A1A1;
  margin: 20px 0 0 0;
`

export const DevTitle = styled.h3`
  width: 150px;
  height: 23px;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
`

export const RightContainer = styled.div`
  height: 565px;
  width: 470px;
  display: flex;
  border-radius: 15px;
  justify-content: space-between;
  flex-direction: column;
  background: #26292B
`

export const TeamDiv = styled.div`
  display: flex;
  margin-bottom: 10px;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;
`

export const CircleContainer = styled.div`
  width: 181px;
  height: 38px;
  justify-content: center;
  justify-items: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  border-radius: 30px;
  box-sizing: border-box;
  outline: 2px solid white;
  margin: 30px 0 0 0;
`

export const Text = styled.h3`
  font-weight: ${(props) => props.fontWeight || '500'};
  font-size: ${(props) => props.fontSize || '18px'};
  color: ${(props) => props.color || WHITE.main};
  text-align: ${(props) => props.alignment || 'center'};
`

export const TeamImgBorder = styled.div`
  width: 253px;
  height: 253px;
  left: 747px;
  top: 228px;
  justify-content: center;
  justify-items: center;
  align-items: center;
  background: #D9D9D9;
  border-radius: 20px;
  margin: 30px 0 30px 0;
`

export const CreateBtnDiv = styled.div`
  width: 146px;
  height: 44px;
  background: #00a4d3;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  background: rgba(93, 157, 11, 0.5);
  flex-direction: column;
  margin: 30px 0 0 0;
`


export const CreateButton = styled.button`
  outline: none;
  border: none;
  font-size: 15px;
  font-weight: 700;
  background: none;
  color: white;
  cursor: pointer;
`