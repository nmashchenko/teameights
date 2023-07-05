import styled from 'styled-components'

export const UserInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`

export const AvatarWrapper = styled.div`
  position: relative;
`

export const AvatarImg = styled.img`
  display: block;
  border-radius: 50%;
  object-fit: cover;
  width: 100px;
  height: 100px;
  user-select: none;
`

export const Text = styled.p`
  font-weight: ${(props) => props.fontWeight || '500'};
  font-size: ${(props) => props.fontSize || '20px'};
  color: ${(props) => props.color || '#fff'}; ;
`

export const GenericButton = styled.button`
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 100%;
  max-width: 222px;
  background: ${(props) => props.background || 'transparent'};
  padding: 10px 0;
  border: ${(props) => props.border || '2px solid #46a11b'};
  border-radius: 10px;
  transition: background-color 0.3s;
  color: #fff;
  font-weight: 400;
  font-size: 16px;
  &:hover {
    background-color: rgba(250, 250, 250, 0.05);
  }
  @media (max-width: 1024px) {
    max-width: none;
  }
`

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 9px;
  @media (max-width: 1024px) {
    align-self: flex-start;
  }

  a {
    text-decoration: none;
    color: white;
    font-size: 16px;
    font-weight: 400;

    :hover {
      color: #5bd424;
    }
  }
`

export const InfoListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  flex-wrap: wrap;
`

export const SocialList = styled.ul`
  margin-top: auto;
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
  svg {
    transition: opacity 0.3s;
    :hover {
      opacity: 0.6;
    }
  }
`

export const EditButton = styled.div`
  width: 28px;
  height: 28px;
  position: absolute;
  background: #46a11b;
  right: 0px;
  bottom: 0px;
  display: flex;
  /* padding: 4px; */
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  cursor: pointer;
`
