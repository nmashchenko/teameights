import styled, { createGlobalStyle } from 'styled-components'

import { B2fs, B2fw, B2lh, B3fs, B3fw, B3lh } from '../../../../assets/fonts'

export const FormikContainer = styled.div`
  label {
    font-size: ${B2fs};
    line-height: ${B2lh};
    font-weight: ${B2fw};
  }
`
export const MyRadioGroup = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 15px;
  margin-bottom: 24px;
`

export const FileButton = styled.div`
  border: 2px dashed #86878b;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0;
  cursor: pointer;
  height: 184px;
`

export const ImageBox = styled.div`
  position: relative;
  opacity: ${(props) => (props.myKey ? '1' : '.50')};
  transition: all 0.2s;

  span {
    display: block;
    position: absolute;

    svg {
      width: 14.29px;
      height: 14.29px;
    }
    // background-color: green;
    right: 0%;
    bottom: 0%;

    opacity: ${(props) => (props.myKey ? '1' : '0')};
  }
`

export const DefaultImg = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
  border-radius: 50%;
  &:after {
    display: block;
    content: '?';
    width: 20px;
    height: 20px;
    background-color: green;
    position: absolute;
  }
`
