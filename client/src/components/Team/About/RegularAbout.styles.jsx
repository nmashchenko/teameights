import styled from 'styled-components'

import { B2fs, B2fw, B2lh, B3fs, B3fw, B3lh } from '../../../constants/fonts'

export const Statistic = styled.div`
  p {
    font-size: ${B2fs};
    line-height: ${B2lh};
    font-weight: ${B2fw};
    margin: 0;
    display: inline !important;
  }
  p span {
    margin: 0;
    color: #5bd424;
    display: inline !important;
  }
`

export const StatisticsFlex = styled.div`
  display: flex;
  gap: 48px;

  @media screen and (max-width: 1024px) {
    width: 100%;
    justify-content: space-between;
    gap: 0;
  }

  @media screen and (max-width: 468px) {
    flex-direction: column;
    gap: 4px;
    justify-content: start;
  }
`

export const TeamCardBody = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  gap: 8px;
  justify-content: space-between;
  height: calc(100% - 94px);
`

export const TeamCardBodyPoint = styled.div`
  h3 {
    color: #86878b;
    margin: 0;
  }
  background-color: transparent;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const TeamCardDesc = styled.p`
  color: #fff;
  line-height: 1.4;
  margin: 0;
`

export const TeamCardFigure = styled.div`
  background-color: transparent;
  margin: 0;
  height: calc(100% - 31px);
  h3 {
    font-size: ${B3fs};
    line-height: ${B3lh};
    font-weight: ${B3fw};
  }
  p {
    margin: 0;
    font-size: ${B2fs};
    line-height: ${B2lh};
    font-weight: ${B2fw};
    color: #fff;
  }
`

export const TeamCardTop = styled.div`
  display: grid;
  grid-template-columns: 140px 80px 100px 140px;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: start;
    gap: 16px;
  }
`
export const TeamCardTopInfo = styled.div`
  h3 {
    margin: 0;
    margin-bottom: 8px;
    color: #86878b;
  }
`

export const StatiscitcsWrapper = styled.div`
  h3 {
    margin: 0;
    color: #86878b;
  }
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (max-width: 1024px) {
    margin-top: 24px;
  }
`
