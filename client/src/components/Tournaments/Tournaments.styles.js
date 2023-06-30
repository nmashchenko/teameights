import styled from 'styled-components'

import { BLACK, GREEN, WHITE } from '../../constants/colors'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${BLACK.background};
`

export const Content = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 55px;
  padding-left: 88px;

  @media screen and (max-width: 1024px) {
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`

export const SmallCard = styled.div`
  width: 774px;
  height: 164px;
  background: #1a1c22;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding: 20px 20px;
  display: flex;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`

export const SmallCardContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: ${(props) => props.fd || 'column'};
  justify-content: ${(props) => props.justify || 'start'};
  align-items: ${(props) => props.align || 'center'};
  margin-right: ${(props) => props.mr || '24px'};
  gap: ${(props) => props.gap || '0'};
`

export const Language = styled.div`
  width: 40px;
  height: 40px;
  background: #26292b;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Text = styled.h3`
  font-weight: ${(props) => props.fontWeight || '700'};
  font-size: ${(props) => props.fontSize || '18px'};
  margin: ${(props) => props.margin || '0 0 0 0'};
  color: ${(props) => props.color || WHITE.main};
`

export const Span = styled.span`
  font-weight: 700;
  font-size: 24px;
  margin: 0;
  color: #5bd424;
`

export const InnerText = styled.span`
  font-weight: ${(props) => props.fontWeight || '700'};
  font-size: ${(props) => props.fontSize || '18px'};
  margin: ${(props) => props.margin || '0 0 0 0'};
  color: ${(props) => props.color || WHITE.main};
`

export const BigCard = styled.div`
  width: 774px;
  height: 402px;
  background: #1a1c22;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1024px) {
    background: transparent;
    box-shadow: none;
    max-width: 774px;
    width: 100%;
  }
`

export const ButtonGeneral = styled.button`
  font-weight: 600;
  font-size: 16px;
  border: none;
  width: 133px;
  height: 45px;
  background: ${GREEN.button};
  color: ${WHITE.main};
  text-align: center;
  border-radius: 10px;
  box-shadow: 0px 4px 50px rgba(93, 157, 11, 0.15);
  &:hover {
    border: none;
    cursor: not-allowed;
    transition: 0.15s;
  }
`