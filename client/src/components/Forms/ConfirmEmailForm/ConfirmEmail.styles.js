import styled from 'styled-components'

import { BLACK, WHITE } from '../../../constants/colors'

export const Container = styled.div`
  width: 100%;
  min-height: calc(100dvh - 88px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${BLACK.background};
`

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 0 15px;
`

export const Text = styled.h3`
  font-weight: ${(props) => props.fontWeight || '500'};
  font-size: ${(props) => props.fontSize || '24px'};
  margin: ${(props) => props.margin || '0'};
  color: ${(props) => props.color || WHITE.main};
  text-align: center;
`

export const ImgContainer = styled.div`
  max-width: 621px;
  width: 100%;

  height: auto;
`
