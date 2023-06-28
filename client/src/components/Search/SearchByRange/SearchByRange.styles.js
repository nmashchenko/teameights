import Slider from '@mui/material/Slider'
import styled from 'styled-components'

export const RangeList = styled.ul`
  position: absolute;
  left: 32px;
  pointer-events: none;
  position: absolute;
  display: flex;
  align-items: center;
  gap: 24px;
`

export const RangeItem = styled.li`
  cursor: pointer;
  width: 46px;
  height: 24px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #27431f;
  }
`

export const StyledRange = styled(Slider)`
  margin: 0 auto;
  height: 100%;
  .MuiSlider-thumb {
    border-radius: 5px;
    width: 46px;
    height: 24px;
    background: #328d0a;
  }

  .MuiSlider-rail {
    background-color: transparent;
  }

  .MuiSlider-track {
    background-color: #27431f;
    border: none;
    height: 24px;
  }

  .MuiSlider-thumb {
    &:focus,
    &:hover,
    &.Mui-active,
    &.Mui-focusVisible {
      box-shadow: none;
    }
  }
`
