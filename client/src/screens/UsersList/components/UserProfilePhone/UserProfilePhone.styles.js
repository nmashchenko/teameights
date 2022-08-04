// * Modules
import styled from 'styled-components'

export const UserProfileContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 50px 30px;
  position: fixed;
  background: #26292b;
  bottom: ${(props) => props.bottom || '-100%'};
  transition: ${(props) => props.transition || 'all 0.3s ease'};
  z-index: 999;
  overflow-y: auto;
  overflow-x: hidden;

  @media screen and (min-width: 730px) {
    visibility: hidden;
  }

  @media screen and (min-width: 480px) and (max-width: 730px) {
    align-items: center;
  }
`

export const ComebackContainer = styled.div`
  cursor: pointer;
  width: 100%;
  @media screen and (min-width: 480px) and (max-width: 730px) {
    align-items: start;
  }
`

export const UserInformationContainer = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  margin-top: 20px;

  @media screen and (min-width: 480px) and (max-width: 730px) {
    justify-content: center;
    align-items: center;
  }
`

export const UserImage = styled.img`
  width: 80px;
  height: 80px;
  box-shadow: 0px 0px 50px rgba(114, 235, 58, 0.1);
  border-radius: 5px;
`

export const UserInfoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  gap: 5px;
`

export const Text = styled.h3`
  font-weight: ${(props) => props.fontWeight || '500'};
  font-size: ${(props) => props.fontSize || '14px'};
  color: ${(props) => props.color || '#fff'};
  margin: ${(props) => props.margin || '0px'};
  text-align: ${(props) => props.textAlign || 'none'};

  @media screen and (min-width: 480px) and (max-width: 730px) {
    text-align: ${(props) => props.textAlign || 'center'};
  }
`

export const LinksContainer = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 15px;
`

export const UserLink = styled.div`
  cursor: pointer;

  &:hover {
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
    transform: scale(1.05);
  }
`

export const DescriptionContainer = styled.div`
  max-width: 350px;
  margin-top: 15px;
`

export const ProjectsContainer = styled.div`
  display: flex;
  margin-top: 15px;
  flex-wrap: wrap;
`

/*TODO: FIX THIS FOR DIFFERENT WIDTH*/
export const ProjectLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 40px;

  &:hover {
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
    transform: scale(1.05);
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-top: 20%;
`

export const Button = styled.button`
  border: none;
  width: 122px;
  height: 40px;
  background: #2e3239;
  border-radius: 5px;
  font-weight: 400;
  font-size: 16px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
    transform: scale(1.05);
  }
`
