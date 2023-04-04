import styled from 'styled-components'

export const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 2fr;
  row-gap: 16px;
  column-gap: 36px;
  padding: 0 32px 24px 32px;
  height: 100%;
  margin-top: 144px;
`

export const LabelFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 12px;
  font-size: 14px;
  color: #86878b;
`
export const LabelTextFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 12px;
  font-size: 14px;
  color: #86878b;
  grid-column: span 2;
`

export const LeaderActionsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  button {
    width: 120px;
  }
  position: absolute;
  bottom: 10.2%;
  right: -46.9%;
  opacity: ${(props) => (props.opacity ? '1' : '0')};
  z-index: ${(props) => (props.opacity ? '9999' : '0')};
  // display: ${(props) => (props.opacity ? 'flex' : 'none')};
  pointer-events: ${(props) => (props.opacity ? 'auto' : 'none')};
`

export const LeaveTeam = styled.button`

  width: 100%;
  height: ${(props) => props.height || '44px'};
  background: transparent;
  border: 2px solid #A5211F;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  color: white;
  outline: none;
  margin-top: ${(props) => props.marginTop || '34px'};
  display: flex;
  justify-content: center;
  align-items: center;
  gap 6px;

  cursor: pointer;

  transition: all .2s;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 2px 25px  #a5211f60;
  }

`
export const EditTeam = styled.button`
  width: ${(props) => props.width || ''};
  margin-top: ${(props) => props.marginTop || '0'};
  background-color: #46a11b;
  padding: 10px 16px 8px;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  border: none;
  transition: all 0.2s;

  box-shadow: 0px 4px 25px rgba(93, 157, 11, 0.25);
  &:hover {
    transform: translateY(-1.25px);
    box-shadow: 0px 5px 31.25px rgba(93, 157, 11, 0.3125);
  }
`
