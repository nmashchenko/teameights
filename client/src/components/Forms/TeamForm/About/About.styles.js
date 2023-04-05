import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
html {
  --H1-f: "NoirPro-Medium"
  --H1-s: "38px"
  --H1-lh: "45.6px"
  
  --H2-f: "NoirPro-Medium"
  --H2-s: "32px"
  --H2-lh: "38.4px"
  
  --H3-f: "NoirPro-Medium"
  --H3-s: "24px"
  --H3-lh: "28.8px"
  
  --H4-f: "NoirPro-Medium"
  --H4-s: "20px"
  --H4-lh: "24px"

  --B-f: "NoirPro-Regular"
  --B1-s: "24px"
  --B1-lh: "33.6px"
  
  --B2-f: "NoirPro-Regular"
  --B2-s: "16px"
  --B2-lh: "22.4px"

  --B3-f: "NoirPro-Light"
  --B3-s: "14px"
  --B3-lh: "16.8px"
}
`

export const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 2fr;
  row-gap: 16px;
  column-gap: 36px;
  // height: 100%;
  // margin-top: 144px;
  input {
    font-size: var(--B2-s);
    line-height: var(--B2-lh);
    font-family: var(--B2-f);
  }
`

export const LabelFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  // gap: 12px;
  font-size: 14px;
  color: #86878b;
  label {
    font-size: var(--B3-s);
    line-height: var(--B3-lh);
    font-family: var(--B3-f);
  }
`
export const LabelTextFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 8px;
  color: #86878b;
  grid-column: span 2;
  textarea {
    font-size: var(--B3-s);
    line-height: var(--B3-lh);
    font-family: var(--B3-f);
  }
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
