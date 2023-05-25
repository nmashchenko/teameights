import styled, { css } from 'styled-components'

import selectedIcon from '../../../../../../../assets/Avatars/defaultAvatarSelectedIcon.svg'

export const ChooseAvatarContainer = styled.div`
  flex: 1;
`

export const DefaultAvatarList = styled.ul`
  display: flex;
  gap: 0.75rem;
`

export const DefaultAvatarContainer = styled.li`
  cursor: pointer;
  position: relative;
  margin-bottom: 2rem;

  &:hover {
    img {
      mix-blend-mode: overlay;
    }
  }

  ${({ selected }) =>
    selected &&
    css`
      &::before {
        content: '';
        position: absolute;
        bottom: 5px;
        z-index: 1;
        right: 5px;
        width: 1rem;
        height: 1rem;
        background-image: url(${selectedIcon});
      }

      img {
        mix-blend-mode: overlay;
      }
    `}
`

export const DefaultAvatar = styled.img`
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 50%;
`

export const ChooseAvatarText = styled.p`
  color: #fff;
  margin-bottom: 1rem;
`
