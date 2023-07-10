import { Form } from 'formik'
import styled from 'styled-components'

export const ProfileForm = styled(Form)`
  width: 100%;
  min-height: 100dvh;
  padding-left: 88px;
  background: #26292b;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  @media (max-width: 768px) {
    padding-left: 0;
    justify-content: start;
  }
`

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  min-height: calc(100dvh - 135px);
  padding-bottom: 48px;

  @media (max-width: 768px) {
    min-height: calc(100dvh - 107px);
  }
`

export const ProfileContainer = styled.div`
  display: flex;
  /* max-width: 800px; */
  gap: 30px;
  margin: 0 auto;
  padding: 0 25px;
  width: 100%;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 768px) {
    margin: 0;
  }
`

export const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.align || 'start'};
  gap: ${(props) => props.gap || '0'};
  width: ${(props) => props.width || 'auto'};
  height: 600px;
  background: #1a1c22;
  border-radius: 15px;
  padding: ${(props) => props.padding || '0'};

  @media (max-width: 1024px) {
    max-width: 470px;
    width: 100%;
    min-height: 600px;
    height: 100%;
  }
`

export const LogoWrapper = styled.div`
  height: 135px;
  display: flex;
  justify-content: center;
  align-items: end;
  width: 100%;
  padding-bottom: 48px;

  @media (max-width: 768px) {
    height: 107px;
  }
`
