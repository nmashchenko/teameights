import styled, { css } from 'styled-components'

import { BLACK, WHITE } from '../../../../shared/constants/colors'

export const RegistrationContainer = styled.div`
  width: 100%;
  background: ${BLACK.background};
  display: flex;
  flex-direction: column;
  padding: 3rem 9.6875rem 5rem 8.125rem;

  @media screen and (max-width: 1124px) {
    padding: 52px;
  }

  @media screen and (max-width: 1024px) {
    padding: 32px;
  }
`

export const Container = styled.div`
  display: flex;
  min-height: 100dvh;
`

export const ResetButton = styled.button`
  border: none;
  background: inherit;
  color: ${WHITE.main};
  outline: none;
  font-weight: 400;
  font-size: 18px;
  margin-top: 0.8rem;
  cursor: pointer;
  align-self: flex-start;
  &:hover {
    cursor: pointer;
    -webkit-transform: scale(1.02);
    -ms-transform: scale(1.02);
    transform: scale(1.02);
  }
`

export const StepContainer = styled.div`
  margin-top: 6rem;
  height: 100%;

  @media screen and (max-width: 600px) {
    margin-top: 24px;
    height: auto;
  }
`

export const ContentContainer = styled.div`
  display: grid;
  ${(props) =>
    props.rows
      ? `grid-template-rows: repeat(${props.rows - 1}, 1fr) 2fr;`
      : 'grid-auto-rows: auto'};
  grid-template-columns: 1fr;
  width: 100%;
  height: 100%;

  gap: ${(props) => props.gap || '3.5rem'};

  @media screen and (max-width: 768px) {
    ${({ transformToFlex }) =>
      transformToFlex &&
      css`
        display: flex;
        flex-direction: column;
      `};

    gap: 32px;
    height: auto;
  }
`
