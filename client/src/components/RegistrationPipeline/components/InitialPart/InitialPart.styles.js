import styled from 'styled-components'

import { BLACK, GREEN, WHITE } from '../../../../shared/constants/colors'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 470px;
  width: 100%;
  min-height: 350px;
  background: ${BLACK.cardContainer};
  border-radius: 15px;
  padding: 32px;
  gap: 24px;
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100dvh;
  width: 100%;
  /* background: ${BLACK.background}; */
  padding: 20px;
`

export const ContinueButton = styled.button`
  font-weight: 600;
  font-size: 16px;
  border: none;
  width: 100%;
  height: 40px;
  padding: 0px 16px;
  color: ${WHITE.main};
  background: #46a11b;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
  }
`

export const MiddleTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

export const TopText = styled.h3`
  font-size: ${(props) => props.fontSize || '18px'};
  font-weight: ${(props) => props.fontWeight || '700'};
  margin: ${(props) => props.margin || '0'};
  color: ${WHITE.main};
  text-align: center;
`
