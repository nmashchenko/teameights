import styled from 'styled-components'

import { ThinClose } from '../../../assets/Team/ThinClose'

export const ThinCloseIcon = styled(ThinClose)``

export const UserGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: start;
  justify-items: start;
  align-items: center;
  align-content: center;
  column-gap: 36px;
  row-gap: 16px;
`
export const UserLinks = styled.div`
  transition: opacity 200ms, display 200ms;
  display: none;
  opacity: 0;
  width: 100%;
  gap: 5px;
`

export const UserInfo = styled.div`
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

  &:hover ${UserInfo} {
    display: ${(props) => (props.isEditing ? `flex` : 'none')};
  }

  &:hover ${UserLinks} {
    display: ${(props) => (props.isEditing ? `none` : 'flex')};
    opacity: 1;
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
`

export const CrownContainer = styled.div`
  position: absolute;
  width: 22px;
  height: 22px;
  transform: rotate(25deg) translate(70%, -150%);
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
