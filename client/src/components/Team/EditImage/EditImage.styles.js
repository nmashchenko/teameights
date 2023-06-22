import styled from 'styled-components'

export const MyRadioGroup = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 15px;
  margin-bottom: 24px;

  @media screen and (max-width: 660px) {
    overflow-x: scroll;

    ::-webkit-scrollbar {
      /* WebKit */
      transition: all 0.2s;
      width: 5px;
      height: 5px;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #5d9d0b;
      border-radius: 10px;
    }
  }
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

export const Text = styled.h3`
  font-weight: ${(props) => props.fontWeight || '400'};
  font-size: ${(props) => props.fontSize || '16px'};
  color: ${(props) => props.color || '#fff'};
  margin: ${(props) => props.margin || '0'};
  /* line-height: ${(props) => props.lineHeight || '1'}; */
`

export const DropFileArea = styled.input`
  color: #fff;
  border: none;
  border-bottom: 1px solid #86878b;
  transition: all 0.2s;
  position: absolute;
  opacity: 0;
  pointer-events: none;
`
