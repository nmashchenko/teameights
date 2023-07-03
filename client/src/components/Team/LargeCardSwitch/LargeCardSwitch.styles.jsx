import styled from 'styled-components'

import { B2fs, B2fw, B2lh } from '../../../shared/constants/fonts'

export const DesktopButtonWrapper = styled.div`
  @media screen and (max-width: 1024px) {
    display: none;
  }
`

export const InviteButton = styled.button`
  border: 1px solid #5bd424;
  color: #fff;
  background: transparent;
  padding: 6px 16px 4px 16px;
  cursor: pointer;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: ${B2fs};
  line-height: ${B2lh};
  font-weight: ${B2fw};
  ${'' /* width: 101px; */}
  height: 32px;
  transition: all 0.2s;
  &:hover {
    svg path:nth-child(3),
    svg path:nth-child(4) {
      transform: translateY(-1px);
      transition: all 0.2s;
    }
  }
`

export const Tab = styled.p`
  color: ${(props) => (!props.isMembers ? '#fff' : '#5BD424')};
  cursor: pointer;
  transition: all 0.2s;
  display: inline-block;
  position: relative;
  margin: 0;
  margin-bottom: 8px;
  font-size: 20px;
  font-weight: 500;

  span {
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: -20%;
    left: 50%;
    background-color: #5bd424;
    transition: all 0.2s;
    transform: translateX(-50%) ${(props) => (props.isMembers ? `scaleX(100%)` : `scaleX(0)`)};
  }
`
export const TabContainer = styled.div`
  display: flex;
  gap: 16px;
  font-weight: ${B2fw};
  line-height: ${B2lh};
  font-size: ${B2fs};
  justify-content: start;
  position: relative;
  top: 0%;
  span {
    width: 100%;
    height: 1px;
    color: #fff;
  }
`
export const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: ${(props) => (props.isMembers ? '32px' : '24px')};
`
