import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import {
  CardGridContainer,
  CardContainer,
  SkeletonCard
} from "./CardSkeleton.styles";

const CardSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((item, i) => (
      <CardGridContainer key={i}>
        <CardContainer>
          <SkeletonCard />
        </CardContainer>
      </CardGridContainer>
    ));
};

export default CardSkeleton;
