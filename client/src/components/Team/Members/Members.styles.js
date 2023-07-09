import styled, { keyframes } from 'styled-components'

import { ThinClose } from '../../../assets/Team/ThinClose'

export const ThinCloseIcon = styled(ThinClose)``

const _fadeIn = keyframes`
  from {
    display: none;
    opacity: 0;
  }
  
  to {
    display: flex;
    opacity: 1;
  }
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

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: start;
  }
`
export const UserLinks = styled.div`
  animation: ${_fadeIn} 0.2s ease-in;
  width: 100%;
  gap: 5px;
  display: flex;
`

export const UserInfo = styled.div`
  animation: ${_fadeIn} 0.2s ease-out;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  width: 100%;
  gap: 4px;
`

export const UserCard = styled.div`
  display: flex;
  gap: 12px;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 235px;
  height: 58px;
  user-select: none;
  padding: 4px;

  &:hover {
    background: ${(props) => (props.isEditing ? `#2f3239` : 'none')};
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 100%;
    max-height: 80px;
  }
`

export const ChatButton = styled.button`
  /* Auto layout */

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 16px;
  gap: 6px;

  width: 125px;
  height: 32px;

  /* Green/Normal */

  background: #46a11b;
  border-radius: 10px;
  border: none;
  outline: none;

  color: white;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
`

export const ProfileButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 6px;

  width: 32px;
  height: 32px;

  /* Green/Normal */

  border: 2px solid #46a11b;
  border-radius: 10px;
  background: inherit;
  cursor: pointer;
`

export const UserImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  user-select: none;
`

export const CrownContainer = styled.div`
  position: absolute;
  width: 25px;
  height: 25px;
  transform: rotate(25deg) translate(70%, -130%);
  svg {
    width: 100%;
    height: 100%;
  }
`

export const SpaceBetween = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export const CloseContainer = styled.div`
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
    &:hover {
      path {
        stroke: ${(props) => (props.isEditing ? `#D42422` : 'none')};
      }
      cursor: pointer;
    }
  }
  opacity: ${(props) => (props.isEditing ? '1' : '0')};
  transition: all 0.2s ease-in-out;
  right: 2%;
  top: 5%;
`

export const FlagContainer = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
`

export const MobileButtonWrapper = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: block;
    width: 100%;
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
  font-size: 16px;
  font-weight: 400;
  width: 100%;
  height: 40px;
  transition: all 0.2s;
  &:hover {
    svg path:nth-child(3),
    svg path:nth-child(4) {
      transform: translateY(-1px);
      transition: all 0.2s;
    }
  }
`
