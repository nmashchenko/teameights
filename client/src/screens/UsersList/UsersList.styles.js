// * Modules
import Modal from '@mui/material/Modal'
import styled, { createGlobalStyle } from 'styled-components'

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
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  width: 80%;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (min-width: 1300px) {
    column-gap: 0px;
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: 1000px) and (max-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 730px) and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 0px) and (max-width: 730px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const CardsZone = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
`

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 120px);
`

export const UserCardModal = styled(Modal)`
  @media screen and (min-width: 0px) and (max-width: 730px) {
    display: none;
  }
`
/**
 * Global style applied for this component.
 * TODO: Move this global style to the root component after refactoring
 */
export const GlobalStyle = createGlobalStyle`
 body {  
   background: #26292B !important;
   overflow-y: scroll;
   scrollbar-width: none; /* Firefox */
   -ms-overflow-style: none;  /* Internet Explorer 10+ */
   ::-webkit-scrollbar { /* WebKit */
     width: 0;
     height: 0;
   }
 }
`
