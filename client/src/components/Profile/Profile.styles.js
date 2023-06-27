import styled from 'styled-components'

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100dvh;
  padding-left: 88px;
  background: #26292b;

  @media (max-width: 768px) {
    padding-left: 0;
  }
`

export const ProfileContainer = styled.div`
  display: flex;
  max-width: 800px;
  gap: 30px;
  margin: 0 auto;
  padding: 0 15px;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    margin: 96px 0 24px 0;
  }
`

export const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.align || 'normal'};
  gap: ${(props) => props.gap || '0'};
  width: ${(props) => props.width || 'auto'};
  height: 600px;
  background: #1a1c22;
  border-radius: 15px;
  padding: ${(props) => props.padding || '0'};

  @media (max-width: 1024px) {
    max-width: 470px;
    width: 100%;
  }
`
