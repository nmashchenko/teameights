import styled from 'styled-components'
import { WHITE, BLACK } from '../../constants/colors'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
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
  margin-bottom: 45px;
`

export const Text = styled.h3`
  font-weight: ${(props) => props.fontWeight || '700'};
  font-size: ${(props) => props.fontSize || '35px'};
  margin: ${(props) => props.margin || '0 0 20px 0'};
  color: ${WHITE.main};
  text-align: center;

  @media screen and (min-width: 620px) and (max-width: 840px) {
    font-size: calc(${(props) => props.fontSize || '35px'} - 7px);
  }

  @media screen and (min-width: 450px) and (max-width: 620px) {
    font-size: calc(${(props) => props.fontSize || '35px'} - 14px);
  }

  @media screen and (min-width: 0px) and (max-width: 450px) {
    font-size: calc(${(props) => props.fontSize || '35px'} - 18px);
  }
`

export const ImgContainer = styled.div`
  width: 621px;
  height: 508px;

  @media screen and (min-width: 620px) and (max-width: 840px) {
    width: 521px;
    height: 408px;
  }

  @media screen and (min-width: 450px) and (max-width: 620px) {
    width: 421px;
    height: 308px;
  }

  @media screen and (min-width: 0px) and (max-width: 450px) {
    width: 321px;
    height: 208px;
  }
`
