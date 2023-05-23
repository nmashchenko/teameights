import styled from 'styled-components'

export const InviteFormText = styled.p`
  color: #fff;
  font-weight: 400;
`

export const InviteArea = styled.div`
  display: flex;
  gap: 16px;
`

export const CustomButton = styled.button`
  width: 142px;
  height: 48px;

  background: #46a11b;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 400;
  color: white;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 6px;

  &:hover {
    -webkit-transform: scale(1.01);
    -ms-transform: scale(1.01);
    transform: scale(1.01);
  }
`

export const InvitedUsersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 270px);
  grid-template-rows: repeat(4, 58px);
  grid-gap: 16px 30px; /* Adjust the gap between grid items as desired */
  grid-auto-flow: dense; /* Fills in empty spaces */
`

export const InvitedUser = styled.div`
  width: 270px;
  height: 58px;
  background-color: inherit;
  flex-wrap: wrap;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;

  &:hover {
    cursor: pointer;
    background: #2f3239;
  }
`

export const UserAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`

export const UserText = styled.h1`
  font-size: ${(props) => props.fontSize || '18px'};
  font-weight: 400;
  color: ${(props) => props.color || 'white'};
`

export const UsernameAvatarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

// export const DeleteContainer = styled.div`
//   cursor: pointer;

//   &:hover {
//     -webkit-transform: scale(1.01);
//     -ms-transform: scale(1.01);
//     transform: scale(1.01);
//   }
// `
