import React from 'react'
import styled from 'styled-components'

const StyledIconWrapper = styled.div`
  cursor: ${(props) => props.cursor || 'default'};
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  padding: ${(props) => props.padding || 0};
  margin: ${(props) => props.margin || 0};
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: ${(props) => props.width || 'auto'};
    height: ${(props) => props.height || 'auto'};
  }
`

const IconWrapper = (props) => {
  return <StyledIconWrapper {...props} />
}

export default IconWrapper
