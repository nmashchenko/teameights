import styled from 'styled-components'

export const StyledNotificationsList = styled.ul`
  margin: 0;
  padding: 0;
  border-bottom: 1px solid #2f3239;
  list-style: none;
  max-height: calc(100% - 62px);

  overflow-y: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  ::-webkit-scrollbar {
    /* WebKit */
    transition: all 0.2s;
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #5d9d0b;
    border-radius: 10px;
  }
`
