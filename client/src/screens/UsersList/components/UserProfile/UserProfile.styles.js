// * Modules
import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 670px;
  height: 430px;
`

export const ProfileContainer = styled.div`
  background: #26292b;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  padding: 30px 25px;
  display: flex;
`

export const LinksAndAvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const UserAvatar = styled.img`
  width: 80px;
  height: 80px;
  box-shadow: 0px 0px 50px rgba(114, 235, 58, 0.1);
  border-radius: 50%;
`

export const UserLink = styled.div`
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
    transform: scale(1.05);
  }
`

export const UserDetailedInfoContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-left: 15px;
`

export const NameAndCloseContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export const CloseContainer = styled.div`
  cursor: pointer;
`

export const UserDescriptionContainer = styled.div`
  max-width: 480px;
  min-height: 90px;
`
export const LinksContainer = styled.div`
  display: flex;
  margin-top: 10px;
`
/*TODO: FIX THIS FOR DIFFERENT WIDTH*/
export const ProjectLinkContainer = styled.div`
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

export const Text = styled.h3`
  font-weight: ${(props) => props.fontWeight || '500'};
  font-size: ${(props) => props.fontSize || '24px'};
  color: ${(props) => props.color || '#fff'};
  margin: ${(props) => props.margin || '0px'};
  text-align: ${(props) => props.textAlign || 'none'};
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
  gap: 40px;
  margin-right: 40px;
  width: calc(100% - 80px);
`

export const Button = styled.button`
  border: none;
  width: 132px;
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
