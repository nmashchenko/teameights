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
  padding: ${(props) => props.padding || '10px 120px'};
  cursor: ${(props) => props.cursor || 'pointer'};
  margin: ${(props) => props.margin || '0'};
`

export const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 670,
  height: 400,
  background: '#26292B',
  border: 'none',
  borderRadius: '15px',
  boxShadow: 24,
  p: 3,
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  flexDirection: 'column',
}

export const CloseContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
`

export const CustomSelect = styled.select`
  margin: 10px 0 0 0;
  appearance: none;
  border: 0;
  outline: none;
  font: inherit;
  /* Personalize */
  width: 18em;
  height: 3em;
  padding: 0 4em 0 1em;
  background: #5d9d0b;
  color: white;
  border-radius: 0.25em;
  box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  /* Remove focus outline */
  &:focus {
    outline: none;
  }
`

export const CustomOption = styled.option`
  background: white;
  color: #26292b;
`
