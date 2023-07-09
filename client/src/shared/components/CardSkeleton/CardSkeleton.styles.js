// * Modules
import Skeleton from 'react-loading-skeleton'
import styled from 'styled-components'

import 'react-loading-skeleton/dist/skeleton.css'

export const CardGridContainer = styled.div`
  width: 100%;
  max-width: ${(props) => props.parentMaxWidth || 'none'};
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: ${(props) => props.borderRadius || '25px'};
  width: ${(props) => props.width || 'auto'};
`

export const SkeletonCard = styled(Skeleton)`
  width: ${(props) => props.width || '230px'};
  /* max-width: ${(props) => props.maxWidth || '0'}; */
  height: ${(props) => props.height || '280px'};
  border-radius: ${(props) => props.borderRadius || '25px'};
`
