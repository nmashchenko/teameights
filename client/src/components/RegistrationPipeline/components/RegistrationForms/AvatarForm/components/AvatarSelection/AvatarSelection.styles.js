import styled from 'styled-components'

export const AvatarSelectionContainer = styled.div`
  display: flex;
  gap: 130px;
  width: 100%;
  justify-content: space-between;

  @media screen and (max-width: 1264px) {
    gap: 45px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const AvatarWrapper = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const Avatar = styled.img`
  width: 270px;
  height: 270px;
  border-radius: 50%;
  object-fit: cover;

  @media screen and (max-width: 900px) {
    width: 170px;
    height: 170px;
  }

  @media screen and (max-width: 768px) {
    width: 140px;
    height: 140px;
    max-width: none;
  }
`
