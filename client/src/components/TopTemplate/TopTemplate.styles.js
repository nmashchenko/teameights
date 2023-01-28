import styled from 'styled-components'

import { BLACK } from '../../constants/colors'

export const ToolbarContainer = styled.div`
  width: 100%;
  background: ${BLACK.background};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  height: 78px;
  grid-auto-flow: column;
`

export const NavContainer = styled.div`
  justify-self: center;
`
