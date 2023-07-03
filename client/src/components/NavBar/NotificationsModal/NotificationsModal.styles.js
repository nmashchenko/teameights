import { Box, Drawer } from '@mui/material'
import { motion } from 'framer-motion'
import styled from 'styled-components'

import IconWrapper from '../../../shared/ui/IconWrapper/IconWrapper'

export const StyledNotificationsModal = styled(motion.div)`
  pointer-events: ${(props) => (props.active ? 'all' : 'none')};
  position: absolute;
  left: calc(100% + 32px);
  top: -16px;
  width: 320px;
  height: 354px;
  background: linear-gradient(90.45deg, #1a1c22 62.8%, #2f3239 209.77%);
  box-shadow: 0px 4px 24px rgba(17, 20, 27, 0.25);
  border-radius: 5px;
  overflow: hidden;
`

export const NotificationsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  @media screen and (max-width: 670px) {
    padding: 24px;
  }
`

export const CrossBtn = styled(IconWrapper)`
  /* padding: 5px; */
  cursor: pointer;
  &:hover {
    path {
      stroke: #d42422;
    }
  }
`

export const MarkAllBtn = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  p {
    margin: 0;
    color: #fff;
  }
  &:hover {
    path {
      stroke: #5bd424;
    }
    p {
      color: #5bd424;
    }
  }
`

export const MobileNotificationsModal = styled(Drawer)`
  display: none;

  & .MuiDrawer-paper {
    background: #26292b;
    overflow: hidden;
  }

  @media screen and (min-width: 0px) and (max-width: 670px) {
    display: block;
  }
`

export const MobileWrapper = styled(Box)`
  width: 100%;
  min-height: 100dvh;
  background: #26292b;
  /* padding: 24px 29px; */
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  overflow: scroll;

  ::-webkit-scrollbar {
    /* WebKit */
    transition: all 0.2s;
    width: 0;
    height: 0;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #000000;
  }
`

export const Text = styled.h3`
  font-weight: 500;
  font-size: 24px;
  color: #5bd424;
  margin: 0;
  text-align: ${(props) => props.textAlign || 'none'};
`

export const MarkAllBtnMobile = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  background: none;
  outline: none;
  border: 2px solid #46a11b;
  border-radius: 10px;
  padding: 10px 16px;
  margin: 16px 24px 24px 24px;
  p {
    color: #fff;
    font-size: 16px;
    font-weight: 400;
  }
  &:hover {
    path {
      stroke: #5bd424;
    }
    p {
      color: #5bd424;
    }
  }
`
