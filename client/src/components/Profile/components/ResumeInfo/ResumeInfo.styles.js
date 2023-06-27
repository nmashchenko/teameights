import styled, { css } from 'styled-components'

export const Text = styled.p`
  font-weight: ${(props) => props.fontWeight || '500'};
  font-size: ${(props) => props.fontSize || '20px'};
  color: ${(props) => props.color || '#fff'};
  line-height: '120%';
`

export const ResumePartBox = styled.div`
  height: 32px;
  display: flex;
  align-items: center;
  gap: 16px;
`

export const ResumePartBtn = styled.div`
  position: relative;
  cursor: pointer;
  color: ${(props) => (props.isActive ? '#5BD424' : '#fff')};
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.6;
  }
  ${(props) =>
    props.isActive &&
    css`
      &:before {
        content: '';
        position: absolute;
        left: 0;
        bottom: -4px;
        height: 1px;
        background-color: #5bd424;
        width: 100%;
      }
    `}
`

export const WrappableList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.gap || '0'};
`

export const FrameWorkItem = styled.li`
  padding: 5px 0;
  width: 100px;
  text-align: center;
  border-radius: 5px;
  background: ${(props) => props.background || '#2F3239'};
  color: ${(props) => props.color || '#2F3239'};
`

export const LanguageItem = styled.li`
  width: 40px;
  height: 40px;
  background-color: #2f3239;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`
