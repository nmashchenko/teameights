// * Modules
import Skeleton from 'react-loading-skeleton'
import styled from 'styled-components'

import 'react-loading-skeleton/dist/skeleton.css'

export const CardGridContainer = styled.div`
  display: flex; /* new */
  align-items: center; /* new */
  justify-content: center; /* new */
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 25px;
`

export const SkeletonCard = styled(Skeleton)`
  width: 200px;
  height: 270px;
  border-radius: 25px;

  @media screen and (min-width: 1440px) {
    width: 240px;
    height: 300px;
  }
`
