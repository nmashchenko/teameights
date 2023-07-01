import { Modal } from '@mui/material'
import styled from 'styled-components'

import { WHITE } from '../../../constants/colors'
import { B2fs, B2fw, B2lh } from '../../../constants/fonts'

export const UsernameIconContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Text = styled.h3`
  font-weight: ${(props) => props.fontWeight || '500'};
  font-size: ${(props) => props.fontSize || '18px'};
  color: ${(props) => props.color || WHITE.main};
  margin: ${(props) => props.margin || '0'};
  text-align: ${(props) => props.textAlign || 'left'};
  /* line-height: ${(props) => props.lineHeight || '1'}; */
`

export const CloseContainerModal = styled.div`
  position: absolute;
  cursor: pointer;
  svg {
    width: 14px;
    height: 14px;
    path {
      stroke: ${(props) => props.color || '#46A11B'};
    }
  }
  color: #fff;
  opacity: 1;
  transition: all 0.2s ease-in-out;
  right: 3%;
  top: 4%;

  &:hover {
    svg {
      path {
        stroke: #d42422;
      }
    }
  }
`

export const Button = styled.button`
  width: 100%;
  height: 44px;
  background: ${(props) => props.background || 'transparent'};
  border: ${(props) => props.border || '2px solid #46a11b'};
  border-radius: 15px;
  font-size: 16px;
  font-weight: 400;
  color: white;
  outline: none;
  margin-top: ${(props) => props.marginTop || '24px'};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: translateY(-2px);
  }
`

export const ListBackdrop = styled.div`
  margin: 0;
  padding: 8px 0;
  width: 306px;
  overflow-y: scroll;
  transition: all 0.2s;
  border-radius: 5px;
  /* margin-top: 24px; */
  display: flex;
  flex-direction: column;
  max-height: 102px;

  ::-webkit-scrollbar {
    width: 5px;
    height: auto;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #5d9d0b;
    border-radius: 10px;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify || 'center'};
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 24px;
  outline: none;
`

export const UserAccordionCard = styled.div`
  display: flex;
  font-size: ${B2fs};
  font-weight: ${B2fw};
  line-height: ${B2lh};
  align-items: center;
  gap: 8px;
  &:hover {
    background-color: #2f3239;
    cursor: pointer;
  }
  height: 32px;
  padding: 4px 8px 4px 16px;
  color: white;
`

export const UserAccordionImg = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
`

export const NoMembersCard = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TeamDesktopModal = styled(Modal)`
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 88px;

  @media screen and (max-width: 768px) {
    padding: 0;
  }

  @media screen and (max-width: 520px) {
    display: none;
  }
`

export const style = {
  position: 'absolute',
  width: '370px',
  height: '350px',
  bgcolor: '#1A1C22',
  margin: 'auto',
  borderRadius: '15px',
  boxShadow: 14,
  padding: '32px 32px',
  backdropFilter: 'blur(5px)',
  outline: 'none',
}

export const teamPreviewStyle = {
  position: 'absolute',
  margin: 'auto',
  width: '570px',
  bgcolor: '#1A1C22',
  borderRadius: '15px',
  boxShadow: 14,
  padding: '24px 32px',
  display: 'flex',
  alignItems: 'start',
  flexDirection: 'column',
  gap: '24px',
}

export const mobileFullScreenStyle = {
  width: '100%',
  minHeight: '100dvh',
  background: '#26292b',
  padding: '24px 29px',
}

export const mobileSemiFullScreenStyle = {
  width: '100%',
  background: '#1A1C22',
  padding: '78px 27px',
}

export const UserPlusContainer = styled.div`
  width: 20px;
  height: 20px;
`
