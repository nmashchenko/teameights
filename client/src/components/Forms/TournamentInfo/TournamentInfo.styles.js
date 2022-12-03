import styled from 'styled-components'
import { WHITE, BLACK } from '../../../constants/colors'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: ${BLACK.background};
`

export const Content = styled.div`
  max-width: 1280px;
  margin: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #26292b;
`

export const Div = styled.div`
  display: flex;
  flex-direction: column;
`

export const TopContainer = styled.div`
  margin-bottom: 25px;
`

export const ComeBackBtn = styled.button`
  border: none;
  outline: none;
  background: inherit;
  margin: 10rem 0 20px 0;
  padding: 0;
  cursor: pointer;
`

export const SelectContainer = styled.div`
  width: 110px;
  align-items: center;
  border-bottom: solid 2px #5d9d0b;
  display: flex;
  flex-direction: column;
`

export const SelectItem = styled.div`
  margin-top: 20px;
  padding-bottom: 5px;
  cursor: pointer;
`

export const TournamentInfoContainer = styled.div`
  display: flex;
  position: relative;
`

export const EntryStartsContainer = styled.div`
  display: flex;
  align-items: center;
  height: 85px;
  border-bottom: solid 2px #353535;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: ${(props) => props.mr || '5rem'};
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: solid 2px #353535;
`

export const AvailableSlotsContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
`

export const AvailableSlotsItem = styled.div`
  display: flex;
  flex-direction: ${(props) => props.fd || 'row'};
  background: ${(props) => props.background || ' #2b2e36'};
  color: white;
  width: ${(props) => props.width || '320px'};
  height: ${(props) => props.height || '60px'};
  font-size: 20px;
  justify-content: ${(props) => props.justify || 'space-between'};
  align-items: ${(props) => props.align || 'start'};
  padding: 0 20px;
  border-radius: 5px 5px 0 0;
  border-bottom: ${(props) => props.borderb || 'none'};
`

export const Text = styled.h1`
  font-weight: ${(props) => props.fontWeight || '400'};
  font-size: ${(props) => props.fontSize || '36px'};
  color: ${(props) => props.color || 'white'};
  text-align: ${(props) => props.alignment || 'start'};
  margin: ${(props) => props.margin || '0'};
`

export const Span = styled.span`
  color: ${(props) => props.color || 'white'};
`

export const PrimaryButton = styled.button`
  color: ${(props) => props.color || 'white'};
  background: ${(props) => props.background || '#5D9D0B'};
  font-weight: ${(props) => props.fontWeight || '600'};
  border: none;
  border-radius: 5px;
  padding: 10px 120px;
  cursor: ${(props) => props.cursor || 'pointer'};
`
