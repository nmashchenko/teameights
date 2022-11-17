import styled from 'styled-components'
import { WHITE, BLACK } from '../../constants/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 88px);
  height: 100vh;
  width: 100%;
  background: ${BLACK.background};
`

export const LeftCard = styled.div`
  height: 565px;
  width: 370px;
  background: #1a1c22;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`

export const RightContainer = styled.div`
  height: 565px;
  width: 470px;
  display: flex;
  border-radius: 15px;
  justify-content: space-between;
  flex-direction: column;
`

export const RightCard = styled.div`
  width: 470px;
  height: 125px;

  background: #1a1c22;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: justify;
  margin-bottom: 10px;
`

export const NameText = styled.h3`
  font-weight: ${(props) => props.fontWeight || '700'};
  font-size: 18px;
  margin: ${(props) => props.margin || '0 0 20px 0'};
  color: ${WHITE.main};
  text-align: center;
`

export const SubText = styled.h3`
  font-weight: ${(props) => props.fontWeight || '700'};
  font-size: 16px;
  margin: ${(props) => props.margin || '0 0 20px 0'};
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
`

export const TitleText = styled.h3`
  font-weight: ${(props) => props.fontWeight || '700'};
  font-size: 16px;
  margin: ${(props) => props.margin || '0 0 20px 0'};
  color: ${WHITE.main};
  text-align: center;
`

export const BannerLText = styled.h3`
  font-weight: ${(props) => props.fontWeight || '700'};
  font-size: 15px;
  margin: ${(props) => props.margin || '0 0 20px 0'};
  margin-left: 10px;
  color: ${WHITE.main};
  text-align: left;
`

export const BannerRText = styled.h3`
  font-weight: ${(props) => props.fontWeight || '700'};
  font-size: 16px;
  margin-left: 10px;
  color: ${WHITE.main};
  text-align: left;
`

export const ImgContainer = styled.div`
  width: 150px;
  height: 150px;
  
`
export const ProfileLine = styled.hr`
  width: 340px;
  height: 0px;
  left: 220px;
  top: 425px;
`

export const BannerLine = styled.hr`
  width: 440px;
  height: 0px;
  left: 620px;
  top: 182px;

  border: 1px solid rgba(42, 60, 19, 0.5);
`

export const saveBtn = styled.div`
  width: 170px;
  height: 45px;
  background: #5D9D0B;
  border-radius: 10px;
`

export const Top = styled.div`
  height: 100%;
  align-self: center;
  align-items: center;
`

export const Bottom = styled.div`
  justify-content: center;
  flex-direction: column;
  background: #5D9D0B;
`