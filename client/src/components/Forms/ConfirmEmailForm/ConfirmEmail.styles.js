import styled from 'styled-components'
import {LIME, BLACK} from '../../../constants/colors'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${LIME.background}
`

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin-bottom: 45px;
`

export const Text = styled.h3`
  font-weight: 700;
  font-size: 36px;
  margin: 0 10px 0 10px;
  color: ${BLACK.main};
`