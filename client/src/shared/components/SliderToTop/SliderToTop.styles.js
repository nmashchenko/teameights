// * Modules
import styled from 'styled-components'

export const SliderContainer = styled.div`
  z-index: 400;
  position: fixed;
  bottom: 48px;
  right: 55px;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  display: flex;
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 2px solid #46a11b;
  backdrop-filter: blur(5px);
  background: transparent;

  @media screen and (max-width: 1280px) {
    width: 40px;
    height: 40px;
  }

  @media screen and (max-width: 1024px) {
    bottom: 36px;
    right: 24px;
  }

  @media screen and (max-width: 768px) {
    bottom: 36px;
    right: 32px;
  }

  @media screen and (max-width: 430px) {
    bottom: 24px;
    right: 16px;
    width: 32px;
    height: 32px;
  }
`
