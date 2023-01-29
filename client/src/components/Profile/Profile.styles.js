import styled from 'styled-components'

import { BLACK, WHITE } from '../../constants/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background: ${BLACK.background};
`

export const LeftCard = styled.div`
  min-height: 565px;
  width: 370px;
  background: #1a1c22;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`

export const RightContainer = styled.div`
  width: 470px;
  display: flex;
  border-radius: 15px;
  justify-content: space-between;
  flex-direction: column;
  gap: 10px;
`

export const RightCard = styled.div`
  width: 470px;
  min-height: 125px;
  background: #1a1c22;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  padding: 10px 10px;
`

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: justify;
  margin-bottom: 10px;
`

export const Text = styled.h3`
  font-weight: ${(props) => props.fontWeight || '500'};
  font-size: ${(props) => props.fontSize || '18px'};
  margin: ${(props) => props.margin || '0'};
  color: ${(props) => props.color || WHITE.main};
  text-align: ${(props) => props.alignment || 'center'};
`

export const ImgContainer = styled.div`
  position: relative;
`

export const Img = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-top: 30px;
`

export const ProfileLine = styled.hr`
  border: 1px solid rgba(42, 60, 19, 0.5);
  width: 90%;
`

export const BannerLine = styled.hr`
  width: 450px;
  height: 0px;
  border: 1px solid rgba(42, 60, 19, 0.5);
`

export const InformationRow = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`

export const SocialRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`

export const SocialWrapper = styled.div`
  margin-top: 30px;
  width: 90%;
`

export const IconTextContainer = styled.div`
  display: flex;
  gap: 15px;
`

export const EditBtnDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin: -25px 0 0 0;
`

export const EditButton = styled.button`
  outline: none;
  border: none;
  font-size: 15px;
  font-weight: 700;
  background: none;
  color: #5d9d0b;
  cursor: pointer;
`

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 78px);
  width: 100%;
`

export const Information = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  justify-content: center;
  width: 100%;
`

export const RightCardData = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  flex-wrap: wrap;
  min-height: 50px;
  justify-content: ${(props) => props.justify || 'start'};
  align-items: center;
`

export const ProgrammingLanguage = styled.div`
  width: 40px;
  height: 40px;
  background: #2e3239;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Framework = styled.div`
  width: 65px;
  height: 35px;
  background: #00a4d3;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.background || '#42443B'};
`
