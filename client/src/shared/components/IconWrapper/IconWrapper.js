import React from 'react'
import styled from 'styled-components'

const StyledIconWrapper = styled.div`
  cursor: ${(props) => props.cursor || 'default'};
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  padding: ${(props) => props.padding || 0};
  margin: ${(props) => props.padding || 0};
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 100%;
    height: 100%;
  }
`

const IconWrapper = (props) => {
  return <StyledIconWrapper {...props} />
}

export default IconWrapper
