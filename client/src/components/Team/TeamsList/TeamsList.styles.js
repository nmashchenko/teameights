import styled from 'styled-components'

import { BLACK, WHITE } from '../../../constants/colors'

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 238px);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background: ${BLACK.background};
  padding: 0 0 50px 88px;

  @media screen and (max-width: 768px) {
    padding: 0 0 50px 0;
  }
`

export const CardContainer = styled.div`
  /* min-height: 100vh; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  padding-left: 24px;
  padding-right: 24px;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 100%;
  max-width: 1134px;
  background: #1a1c22;
  border-radius: 15px;
  padding: 32px 32px;

  @media screen and (max-width: 1440px) {
    max-width: 784px;
    padding: 24px 24px;
  }

  @media screen and (max-width: 1024px) {
    max-width: 748px;
  }

  @media screen and (max-width: 900px) {
    max-width: 502px;
  }
`

export const Text = styled.h3`
  line-height: ${(props) => props.lineHeight || '500'};
  font-weight: ${(props) => props.fontWeight || '500'};
  font-size: ${(props) => props.fontSize || '24px'};
  margin: ${(props) => props.margin || '0 0 0 0'};
  color: ${(props) => props.color || WHITE.main};
  text-align: ${(props) => props.textAlign || 'none'};
`

export const TeamData = styled.div`
  width: 100%;
  display: grid;
  justify-content: space-between;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 3fr 2fr repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => props.margin || '0'};
`

export const TeamImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`

export const TeamButton = styled.button`
  width: ${(props) => props.width || '74px'};
  height: ${(props) => props.height || '40px'};
  border: none;
  outline: none;
  background: #46a11b;
  /* border: 2px solid #5d9d0b; */
  border-radius: 10px;
  font-weight: ${(props) => props.fontWeight || '400'};
  font-size: ${(props) => props.fontSize || '16px'};
  color: white;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  justify-self: end;
  /* position: relative; */
  overflow: hidden;

  &:hover {
    transform: translateY(-1.25px);
  }
`

export const teamPreviewStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-45%, -50%)',
  width: '570px',
  bgcolor: '#1A1C22',
  borderRadius: '15px',
  boxShadow: 14,
  padding: '24px 32px',
  display: 'flex',
  alignItems: 'start',
  flexDirection: 'column',
  gap: '24px',
}

export const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 238px);
  /* height: 100%; */
  padding-left: 88px;
`
