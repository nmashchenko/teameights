import { BLACK, GREEN, WHITE } from 'shared/constants/colors'
import styled from 'styled-components'

export const AuthContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  background: ${BLACK.background};
`

export const RightScreenContainer = styled.div`
  width: 50%;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 0px) and (max-width: 950px) {
    display: none;
  }
`

export const ImageContainer = styled.div`
  position: relative;
  text-align: center;
  width: 500px;
  height: 610px;

  @media screen and (min-width: 950px) and (max-width: 1200px) {
    width: 400px;
    height: 510px;
  }
`

export const TextContainer = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`

export const Text = styled.h3`
  font-weight: ${(props) => props.fontWeight || '700'};
  font-size: ${(props) => props.fontSize || '42px'};
  text-transform: ${(props) => props.textTransform || 'uppercase'};
  color: ${WHITE.main};
  margin: ${(props) => props.margin || '0'};

  @media screen and (min-width: 950px) and (max-width: 1200px) {
    font-size: ${(props) => props.fontSize || '32px'};
  }
`

export const SpannedLetter = styled.span`
  color: ${GREEN.text};
`

export const SeparateLine = styled.div`
  border: 1px solid rgba(54, 90, 8, 0.5);
  height: 75vh;
  position: absolute;
  left: 50%;
  top: 12%;

  @media screen and (min-width: 0px) and (max-width: 950px) {
    display: none;
  }
`
