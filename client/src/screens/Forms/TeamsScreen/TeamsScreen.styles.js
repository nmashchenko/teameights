import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
body {  
  background: #26292B !important;
  overflow-y: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  ::-webkit-scrollbar { /* WebKit */
  transition: all 0.2s;
    width:  ${(props) => (props.scrollbar ? `10px` : '0')};
    height:   ${(props) => (props.scrollbar ? `auto` : '0')};
  }
  ::-webkit-scrollbar-track {
   background: transparent;
 }

 ::-webkit-scrollbar-thumb {
   background-color: 
   ${(props) => (props.scrollbar ? `#5D9D0B;` : '#000000')};
   border-radius: 10px;
 }


}
`

export const TeamsScreenFlexbox = styled.div`
  display: flex;
`
