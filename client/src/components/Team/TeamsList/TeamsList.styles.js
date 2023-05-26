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
  min-height: 100vh;
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
  grid-template-columns: 1.2fr 1.3fr 0.9fr 0.5fr;
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
  border: 2px solid #5d9d0b;
  box-shadow: 0px 4px 25px rgba(93, 157, 11, 0.25);
  border-radius: 8px;
  font-weight: ${(props) => props.fontWeight || '400'};
  font-size: ${(props) => props.fontSize || '16px'};
  color: white;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  justify-self: end;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-1.25px);
    box-shadow: 0px 5px 31.25px rgba(93, 157, 11, 0.3125);
  }
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
