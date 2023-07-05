import selectedIcon from 'shared/assets/Avatars/defaultAvatarSelectedIcon.svg'
import styled, { css } from 'styled-components'

export const ChooseAvatarContainer = styled.div`
  flex: 1;
  width: 100%;
`

export const DefaultAvatarList = styled.ul`
  display: flex;
  gap: 0.75rem;
  width: 100%;
  max-width: 406px;

  @media screen and (max-width: 500px) {
    overflow-x: scroll;

    ::-webkit-scrollbar {
      /* WebKit */
      transition: all 0.2s;
      width: 5px;
      height: 5px;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #5d9d0b;
      border-radius: 10px;
    }
  }
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
