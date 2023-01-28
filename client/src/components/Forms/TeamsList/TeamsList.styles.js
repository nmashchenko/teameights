import styled from 'styled-components'

import { BLACK, WHITE } from '../../../constants/colors'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background: ${BLACK.background};
`

export const CardContainer = styled.div`
  min-height: calc(100vh - 78px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 774px;
  background: #1a1c22;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding: 25px 40px;
`

export const ColumnNames = styled.div`
  display: flex;
  width: 500px;
  justify-content: space-between;
  align-items: start;
`

export const Text = styled.h3`
  font-weight: ${(props) => props.fontWeight || '500'};
  font-size: ${(props) => props.fontSize || '24px'};
  margin: ${(props) => props.margin || '0 0 0 0'};
  color: ${(props) => props.color || WHITE.main};
  text-align: ${(props) => props.textAlign || 'none'};
`

export const TeamData = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${(props) => props.margin || '0'};
`

export const TeamImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`

export const TeamButton = styled.button`
  width: ${(props) => props.width || '80px'};
  height: ${(props) => props.height || '45px'};
  border: none;
  outline: none;
  background: #5d9d0b;
  box-shadow: 0px 4px 25px rgba(93, 157, 11, 0.25);
  border-radius: 8px;
  font-weight: ${(props) => props.fontWeight || '400'};
  font-size: ${(props) => props.fontSize || '16px'};
  color: white;
  cursor: pointer;
`

export const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#26292B',
  borderRadius: '15px',
  boxShadow: 14,
  p: 4,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '25px',
}
