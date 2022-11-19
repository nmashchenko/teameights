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
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
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

// export const SubText = styled.h3`
//   font-weight: ${(props) => props.fontWeight || '700'};
//   font-size: 16px;
//   margin: ${(props) => props.margin || '0 0 20px 0'};
//   color: rgba(255, 255, 255, 0.5);
//   text-align: center;
// `

// export const TitleText = styled.h3`
//   font-weight: ${(props) => props.fontWeight || '700'};
//   font-size: 16px;
//   margin: ${(props) => props.margin || '0 0 20px 0'};
//   color: ${WHITE.main};
//   text-align: center;
// `

// export const BannerLText = styled.h3`
//   font-weight: ${(props) => props.fontWeight || '700'};
//   font-size: 15px;
//   margin: ${(props) => props.margin || '0 0 20px 0'};
//   margin-left: 10px;
//   color: ${WHITE.main};
//   text-align: left;
// `

// export const BannerRText = styled.h3`
//   font-weight: ${(props) => props.fontWeight || '700'};
//   font-size: 16px;
//   margin-left: 15px;
//   color: ${WHITE.main};
//   text-align: left;
// `

export const ImgContainer = styled.div`
  width: 150px;
  height: 150px;
  margin-top: 30px;
`
export const ProfileLine = styled.hr`
  border: 1px solid rgba(42, 60, 19, 0.5);
  width: 90%;
`

export const BannerLine = styled.hr`
  width: 440px;
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
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${ (props) => (props.marginTop || '30px')};
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

export const saveBtn = styled.button`
  background: ${(props) => (props.primary ? 'palevioletred' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'palevioletred')};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

// export const Top = styled.div`
//   height: 100%;
//   align-self: center;
//   align-items: center;
// `

export const Bottom = styled.div`
  justify-content: center;
  flex-direction: column;
  background: #5d9d0b;
`
