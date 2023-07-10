import styled from 'styled-components'

import { B2fs, B2fw, B2lh, B3fs, B3fw, B3lh } from '../../../constants/fonts'

export const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto 2fr;
  row-gap: 16px;
  column-gap: 24px;
  input {
    font-size: ${B2fs};
    line-height: ${B2lh};
    font-weight: ${B2fw};
  }
  input:focus {
    outline: none;
  }
`

export const LabelFieldContainer = styled.div`
  align-items: start;
  font-size: 14px;
  color: #86878b;
  label {
    font-size: ${B3fs};
    line-height: ${B3lh};
    font-weight: ${B3fw};
  }
`
export const LabelTextFieldContainer = styled.div`
  label {
    font-size: ${B3fs};
    line-height: ${B3lh};
    font-weight: ${B3fw};
  }
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 2px;
  color: #86878b;
  grid-column: span 2;
  textarea {
    font-size: ${B3fs};
    line-height: ${B3lh};
    font-weight: ${B3fw};
  }
`

export const LeaderActionsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  button {
    width: 107px;
  }
  position: absolute;
  bottom: 6%;
  right: -48.5%;
  opacity: ${(props) => (props.opacity ? '1' : '0')};
  z-index: ${(props) => (props.opacity ? '9999' : '0')};
  pointer-events: ${(props) => (props.opacity ? 'auto' : 'none')};
`

export const LeaveTeam = styled.button`
  width: 100%;
  height: ${(props) => props.height || '44px'};
  background: transparent;
  border: 2px solid #a5211f;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  color: white;
  outline: none;
  margin-top: ${(props) => props.marginTop || '34px'};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 2px 25px #a5211f60;
  }
`
export const EditTeam = styled.button`
  width: ${(props) => props.width || ''};
  margin-top: ${(props) => props.marginTop || '0'};
  background-color: #46a11b;
  padding: 10px 16px 8px;
  border-radius: 10px;
  color: #fff;
  font-size: ${B2fs};
  font-weight: ${B2fw};
  line-height: ${B2lh};
  cursor: pointer;
  border: none;
  transition: all 0.2s;
  box-shadow: 0px 4px 25px rgba(93, 157, 11, 0.25);
  &:hover {
    transform: translateY(-1.25px);
    box-shadow: 0px 5px 31.25px rgba(93, 157, 11, 0.3125);
  }
`

export const nameStyles = (backgroundColor) => {
  return {
    color: '#FFF',
    backgroundColor: `${backgroundColor[0]}`,
    border: 'none',
    padding: '8px 4px',
    borderBottom: '1px solid #86878B',
    width: `98%`,
    transition: 'all .2s',
    height: '34px',
  }
}
