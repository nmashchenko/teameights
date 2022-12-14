// * Modules
import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'
import styled from 'styled-components'
import { BLACK } from '../../constants/colors'

// * Styles
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
