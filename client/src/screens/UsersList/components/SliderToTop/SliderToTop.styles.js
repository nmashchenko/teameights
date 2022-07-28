import styled from 'styled-components'

export const SliderContainer = styled.div`
  z-index: 400;
  position: fixed;
  bottom: 0;
  right: 0;
  margin-right: 90px;
  margin-bottom: 50px;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  @media screen and (min-width: 731px) and (max-width: 980px) {
    margin-right: 35px;
  }

  @media screen and (min-width: 400px) and (max-width: 731px) {
    margin-right: 15px;
  }

  @media screen and (min-width: 0px) and (max-width: 400px) {
    margin-right: 2px;
  }
`
