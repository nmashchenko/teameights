// * Modules
import Skeleton from 'react-loading-skeleton'
import styled from 'styled-components'

import 'react-loading-skeleton/dist/skeleton.css'

export const CardGridContainer = styled.div`
  display: flex; /* new */
  align-items: center; /* new */
  justify-content: center; /* new */
  width: 100%;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: ${(props) => props.borderRadius || '25px'};
  width: 100%;
`

export const SkeletonCard = styled(Skeleton)`
  width: ${(props) => props.width || '230px'};
  /* max-width: ${(props) => props.maxWidth || '0'}; */
  height: ${(props) => props.height || '280px'};
  border-radius: ${(props) => props.borderRadius || '25px'};
`
