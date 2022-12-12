// * Modules
import styled from 'styled-components'

// * Constants
import { BLACK, GREEN, WHITE } from '../../../../../constants/colors'

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
`

export const DataContainer = styled.div`
  width: 100%;
  background: ${BLACK.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
`

export const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  height: calc(100vh - 91px);
`

export const CardContainer = styled.div`
  width: 759px;
  height: 461px;
  background: #1a1c22;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 55px;
`

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 301px;
`
export const UserImageContainer = styled.div``

export const AvatarsContainer = styled.div`
  width: 321px;
  height: 301px;
  background: rgba(14, 15, 18, 0.6);
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`

export const UploadArea = styled.div`
  width: 160px;
  height: 301px;
  background: rgba(14, 15, 18, 0.6);
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`
export const DefaultImageArea = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
`

export const ImageArea = styled.img`
  width: 130px;
  height: 130px;
`

export const Text = styled.h1`
  font-size: ${(props) => props.fontSize || '18px'};
  font-weight: ${(props) => props.fontWeight || '700'};
  margin: ${(props) => props.margin || '0'};
  color: ${(props) => props.color || WHITE.main};
  /* text-align: center; */
`

export const DoneButton = styled.button`
  font-weight: 600;
  font-size: 16px;
  margin-top: 30px;
  border: none;
  width: 171px;
  height: 50px;
  color: ${WHITE.main};
  background: ${GREEN.button};
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    transition: 0.3s ease-in-out;
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
    transform: scale(1.05);
  }
`

export const CodingArea = styled.div`
  width: 240px;
  height: 110px;
  border-radius: 10px;
  background: #26292b;
  margin-top: 5px;
`

export const Button = styled.button`
  font-weight: 400;
  font-size: 18px;
  border: none;
  width: 170px;
  height: 49px;
  color: ${WHITE.main};
  background: ${GREEN.button};
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    -webkit-transform: scale(1.02);
    -ms-transform: scale(1.02);
    transform: scale(1.02);
  }
`
