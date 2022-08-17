// * Modules
import styled, { keyframes } from 'styled-components'

// * Constants
import { BLACK, WHITE, GREEN, GREY, RED } from '../../../../../constants/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 85px);
  width: 100%;
  background: ${BLACK.background};
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 770px;
  height: 420px;
  padding: 20px 25px;
  background: ${BLACK.cardContainer};
  border-radius: 25px;
  margin-bottom: 78px;
  margin-top: 50px;
  box-shadow: 0px 5px 50px rgba(0, 0, 0, 0.1);
`
