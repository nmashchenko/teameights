// * Styles
import { CardContainer, CardGridContainer, SkeletonCard } from './CardSkeleton.styles'

const CardSkeleton = ({ cards, width, height, borderRadius, maxWidth }) => {
  return Array(cards)
    .fill(0)
    .map((item, i) => (
      <CardGridContainer key={i} width={width}>
        <CardContainer borderRadius={borderRadius} width={width}>
          <SkeletonCard
            baseColor="#313131"
            highlightColor="#525252"
            width={width}
            maxWidth={maxWidth}
            height={height}
            borderRadius={borderRadius}
          />
        </CardContainer>
      </CardGridContainer>
    ))
}

export default CardSkeleton