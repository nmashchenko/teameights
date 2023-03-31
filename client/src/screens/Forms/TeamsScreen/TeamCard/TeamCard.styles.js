import styled from 'styled-components'

export const TeamCardFigure = styled.figure`
  background-color: #1a1c22;
  width: 670px;
  height: 468px;
  padding: 24px 32px;
  border-radius: 15px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
`

export const TeamCardTop = styled.div`
  display: flex;
  gap: 18px;
`
export const TeamCardTopInfo = styled.div`
  &:nth-child(1) {
    width: 140px;
  }
  &:nth-child(2) {
    width: 60px;
  }
  &:nth-child(3) {
    width: 100px;
  }
  &:nth-child(4) {
    width: 140px;
  }

  h3 {
    font-size: 17px;
    color: #86878b;
    font-weight: 400;
  }

  p {
    font-size: 16px;
    color: #fff;
  }
`

export const TeamCardTopIcon = styled.img`
  width: 75px;
  height: 75px;
  margin-left: auto;
`

export const TeamCardBody = styled.div`
  diplay: flex;
  flex-direction: column;
  gap: 40px;
  background-color: transparent;
  margin-top: 10px;
`

export const TeamCardBodyPoint = styled.div`
  h3 {
    font-size: 17px;
    color: #86878b;
    margin: 0;
    font-weight: 400;
    margin-bottom: 12px;
  }
  background-color: transparent;

  margin-bottom: 16px;

  div :not(div div) {
    display: flex;
    gap: 36px;
  }

  :nth-child(2) {
    display: flex;
    gap: 48px;
    h3 {
      margin-bottom: 8px;
    }
  }

  :nth-child(4) {
    display: flex;
    padding-top: 24px;
    justify-content: space-between;
  }
`

export const TeamCardDesc = styled.p`
  font-size: 16px;
  color: #fff;
  line-height: 1.4;
  margin: 0;
`

export const CrownContainer = styled.div`
  position: absolute;
  transform: rotate(0deg) translate(15%, 1%) scale(0.5);
`

export const TeamCardPerson = styled.div`
  display: flex;
  flex-direction: column;
`

export const TeamCardPicture = styled.img`
  width: 40px;
  height: 40px;
`

export const TeamCardMembers = styled.div`
  display: flex;
  gap: 8px;
`

export const StatisticsFlex = styled.div`
  display: flex;
  gap: 48px;
`
export const Statistic = styled.div`
  p {
    font-size: 16px;
    color: #fff;
    margin: 0;
    display: inline !important;
  }

  p span {
    margin: 0;
    color: #5bd424;
    display: inline !important;
  }
`

export const JoinTeam = styled.button`
  background-color: #46a11b;
  padding: 10px 16px 8px;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  border: none;
  transition: all 0.2s;
  opacity: ${(props) => (props.disabled ? '.5' : '1')};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
  user-select: ${(props) => (props.disabled ? 'none' : 'auto')};

  box-shadow: 0px 4px 25px rgba(93, 157, 11, 0.25);
  &:hover {
    transform: translateY(-1.25px);
    box-shadow: 0px 5px 31.25px rgba(93, 157, 11, 0.3125);
  }
`
export const ToTeams = styled.button`
  border-radius: 10px;
  cursor: pointer;
  padding: 10px 16px 8px;
  color: #fff;
  font-size: 16px;

  background-color: transparent;
  border: 2px solid #46a11b;

  &:hover {
    svg {
      transform: translateX(-2px);
    }
  }
  svg {
    transition: all 0.2s;
    margin-right: 12px;
  }
  path {
    stroke: #fff;
  }
`
