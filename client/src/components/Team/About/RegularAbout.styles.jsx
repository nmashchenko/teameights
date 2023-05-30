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
`

export const TeamCardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: transparent;
  height: 100%;
`

export const TeamCardBodyPoint = styled.div`
  h3 {
    color: #86878b;
    margin: 0;
  }
  background-color: transparent;
  div :not(div div) {
    display: flex;
    gap: 36px;
  }
  :nth-child(1) {
    h3 {
      margin-bottom: 8px;
    }
    max-height: 100%;
  }
  :nth-child(2) {
    position: absolute;
    bottom: 5%;
    display: flex;
    gap: 8px;
    flex-direction: column;
    h3 {
      margin: 0;
    }
    margin-top: auto;
  }
`

export const TeamCardDesc = styled.p`
  color: #fff;
  line-height: 1.4;
  margin: 0;
`

export const TeamCardFigure = styled.div`
  background-color: transparent;
  margin: 0;
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
  margin-bottom: 16px;
`
export const TeamCardTopInfo = styled.div`
  h3 {
    margin: 0;
    margin-bottom: 8px;
    color: #86878b;
  }
`
