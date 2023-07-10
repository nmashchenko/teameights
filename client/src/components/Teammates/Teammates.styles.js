// * Modules
import Modal from '@mui/material/Modal'
import styled from 'styled-components'

export const GridContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 30px;
`

export const CardsContainer = styled.div`
  display: grid;
  row-gap: 50px;
  margin-top: 15px;
  width: 100%;
  max-width: 1196px;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (max-width: 1440px) {
    max-width: 826px;
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 1024px) {
    max-width: 770px;
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 900px) {
    max-width: 526px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const CardsZone = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  /* position: relative; */
  padding-left: 88px;

  @media screen and (max-width: 768px) {
    padding-left: 0px;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 238px);
  padding-left: 88px;

  @media screen and (max-width: 768px) {
    padding-left: 0px;
  }
`

export const UserCardModal = styled(Modal)`
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 88px;

  @media screen and (max-width: 768px) {
    padding: 0;
  }

  @media screen and (max-width: 520px) {
    display: none;
  }
`

export const HidableWrapper = styled.div`
  display: ${(props) => props.display || 'none'};
`
