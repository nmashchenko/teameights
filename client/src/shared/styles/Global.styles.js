import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 *,
 *::before,
 *::after {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   font-family: 'Rubik', sans-serif !important;
 }

 /* html {
  background: #26292B !important;
 } */

 body {
   background: #26292B !important;
   overflow-y: scroll;
   scrollbar-width: none; /* Firefox */
   -ms-overflow-style: none;  /* Internet Explorer 10+ */
   ::-webkit-scrollbar { /* WebKit */
   transition: all 0.2s;
     width:  ${(props) => (props.theme.scrollbar ? `5px` : '0')};
     height:   ${(props) => (props.theme.scrollbar ? `auto` : '0')};
   }
   ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: 
    ${(props) => (props.theme.scrollbar ? `#5D9D0B;` : '#000000')};
    border-radius: 10px;
  }
 }

 div {
  ::-webkit-scrollbar { /* WebKit */
   transition: all 0.2s;
     width:  5px;
     height:  0;
   }
   ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #5D9D0B;
    border-radius: 10px;
  }
 }
  
 ul{
   list-style-type: none;
 }
`
