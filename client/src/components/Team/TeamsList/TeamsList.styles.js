import { Drawer, Modal } from '@mui/material'
import styled from 'styled-components'

import { BLACK, WHITE } from '../../../constants/colors'

export const TeamCardModal = styled(Modal)`
  @media screen and (min-width: 0px) and (max-width: 600px) {
    display: none;
  }
`

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

export const TeamsWrapper = styled.div`
  /* min-height: 100vh; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  padding-left: 24px;
  padding-right: 24px;
`

export const TeamsListBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 100%;
  max-width: 1134px;
  background: #1a1c22;
  border-radius: 15px;
  padding: 20px 32px 32px 32px;
  gap: ${(props) => (props.isLoading ? '12px' : 0)};

  @media screen and (max-width: 1440px) {
    max-width: 784px;
    padding: 12px 24px 24px 24px;
  }

  @media screen and (max-width: 1024px) {
    max-width: 748px;
  }

  @media screen and (max-width: 900px) {
    max-width: 502px;
    background: transparent;
    padding: 0;
    gap: 16px;
  }
`

export const Text = styled.h3`
  font-weight: ${(props) => props.fontWeight || '500'};
  font-size: ${(props) => props.fontSize || '24px'};
  margin: ${(props) => props.margin || '0 0 0 0'};
  color: ${(props) => props.color || WHITE.main};
  text-align: ${(props) => props.textAlign || 'none'};
`

export const TeamDataDesktop = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 0.7fr 3fr repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  height: 82px;
  margin-top: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '0'};
  border-bottom: 1px solid #2f3239;
  min-height: 50px;

  @media screen and (max-width: 900px) {
    display: none;
  }
`

export const TeamDataMobile = styled.div`
  margin-top: ${(props) => props.margin || '0'};
  background: #1a1c22;
  padding: 12px 16px;
  height: 81px;
  border-radius: 15px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  display: none;
  cursor: pointer;

  @media screen and (max-width: 900px) {
    display: flex;
  }
`

export const TeamImage = styled.img`
  width: ${(props) => props.width || '60px'};
  height: ${(props) => props.height || '60px'};
  border-radius: 50%;
  object-fit: cover;
  user-select: none;
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
