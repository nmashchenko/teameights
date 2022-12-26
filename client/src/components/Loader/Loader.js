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
  width: 100%;
  height: 100vh;
  background: ${BLACK.background};
`

const Loader = () => {

  return (
    <Container>
      <InfinitySpin width="200" color="#4fa94d" />
    </Container>
  )
}

export default Loader
