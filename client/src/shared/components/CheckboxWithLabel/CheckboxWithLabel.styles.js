import styled, { keyframes } from 'styled-components'

export const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`

export const Label = styled.label`
  position: relative;
  display: inline-block;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  color: white;
  left: 30px;
  font-size: 15px;
  font-weight: 400;
  max-width: 170px;
  max-height: 50px;

  &:hover {
    color: #5bd424;
  }
`

const rotate = keyframes`
 from {
    opacity: 0;
    transform: rotate(0deg);
  }
  to {
    opacity: 1;
    transform: rotate(45deg);
  }
`

export const Indicator = styled.div`
  width: 1.2em;
  height: 1.2em;
  background: none;
  position: absolute;
  top: 0em;
  left: -30px;
  border: 1px solid white;
  border-radius: 0.2em;

  ${Label}:hover & {
    background: none;
  }

  &::after {
    position: absolute;
    display: none;
    content: '';
  }

  ${Input}:checked + &::after {
    display: block;
    top: 0.1em;
    left: 0.35em;
    width: 35%;
    height: 70%;
    border: solid #5bd424;
    border-width: 0 0.2em 0.2em 0;
    animation-name: ${rotate};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }

  &:disabled {
    cursor: not-allowed;
  }
`
