import styled from 'styled-components'

import { WHITE } from '../../../../constants/colors'
import { B2fs, B2fw, B2lh, B3fs, B3fw, B3lh } from '../../../../constants/fonts'

export const ImagesContainer = styled.div`
  display: flex;
  gap: 36px;
`

export const TeamCardTop = styled.div`
  display: flex;
  gap: 32px;
`
export const TeamCardTopInfo = styled.div`
  display: flex;
  align-items: center;
`

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: start;
  align-items: start;
`

export const TeamText = styled.div`
  font-weight: ${(props) => props.fontWeight || '400'};
  font-size: ${(props) => props.fontSize || '16px'};
  margin: ${(props) => props.margin || '0'};
  color: ${(props) => props.color || WHITE.main};
  text-align: ${(props) => props.alignment || 'center'};
`

export const TeamCardTopIcon = styled.img`
  width: ${(props) => props.w || '75px'};
  height: ${(props) => props.h || '75px'};
  border-radius: ${(props) => props.borderRadius || '50%'};
  object-fit: cover;
  user-select: none;
`

export const TypeCountryFlagContainer = styled.div`
  display: flex;
  gap: 5px;
`

export const TeamCardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  background-color: transparent;
  margin-top: 16px;
`

export const TeamCardBodyPoint = styled.div`
  background-color: transparent;
  // margin-bottom: 8px;
  div :not(div div) {
    display: flex;
    gap: 36px;
  }
  p {
    max-height: 88px;
    padding-right: 8px;
  }
`

export const TeamCardDesc = styled.p`
  font-size: 16px;
  color: #fff;
  line-height: 1.4;
  margin: 0;
`

export const CrownContainer = styled.div`
  position: absolute;
  width: 22px;
  height: 22px;
  transform: rotate(25deg) translate(90%, -100%);
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
  width: 50px;
  height: 50px;
  border-radius: 50%;
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
    font-size: 16px;
    color: #fff;
    margin: 0;
    display: inline !important;
    font-weight: 400;
  }
  p span {
    margin: 0;
    color: #5bd424;
    display: inline !important;
  }
`

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`

export const JoinTeam = styled.button`
  background-color: #46a11b;
  padding: 10px 16px 8px;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  border: none;
  transition: all 0.2s;
  opacity: ${(props) => (props.disabled ? '.5' : '1')};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
  user-select: ${(props) => (props.disabled ? 'none' : 'auto')};
  &:hover {
    transform: translateY(-1.25px);
  }
`

export const ProfileButton = styled.button`
  background: none;
  outline: none;
  border: none;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 9px;
  color: white;
  cursor: pointer;
  transition: 0.2s ease;
  &:hover {
    transform: translateX(1.25px);
  }
`
