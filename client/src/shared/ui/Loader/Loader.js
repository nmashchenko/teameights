// * Modules
import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'
import styled from 'styled-components'

import { BLACK } from '../../constants/colors'

// * Styles
const Container = styled.div`
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100dvw;
  height: 100dvh;
  background: ${BLACK.background};
  padding-left: ${(props) => props.paddingLeft || '0'};
`

const Loader = ({ paddingLeft = '0' }) => {
  return (
    <Container paddingLeft={paddingLeft}>
      <InfinitySpin width="200" color="#4fa94d" />
    </Container>
  )
}

export default Loader
