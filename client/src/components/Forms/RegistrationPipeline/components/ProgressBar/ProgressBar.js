import React from 'react'

import { ProgressBarContainer, ProgressDone } from './ProgressBar.styles'

const ProgressBar = ({ done }) => {
  const [style, setStyle] = React.useState({})

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    }

    setStyle(newStyle)
  }, 200)

  return (
    <ProgressBarContainer>
      <ProgressDone style={style}>{done >= '10' ? done + '%' : ''}</ProgressDone>
    </ProgressBarContainer>
  )
}

export default ProgressBar
