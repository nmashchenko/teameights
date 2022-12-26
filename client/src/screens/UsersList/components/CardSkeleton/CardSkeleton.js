// * Styles
import { CardContainer, CardGridContainer, SkeletonCard } from './CardSkeleton.styles'

const CardSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((item, i) => (
      <CardGridContainer key={i}>
        <CardContainer>
          <SkeletonCard baseColor="#313131" highlightColor="#525252" />
        </CardContainer>
      </CardGridContainer>
    ))
}

export default CardSkeleton
