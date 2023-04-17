import styled from 'styled-components'

export const AvatarWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 350px;
  background-color: rgba(14, 15, 18, 1);
  border-radius: 10px;
  gap: 2rem;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const CardContainer = styled.div`
  width: 759px;
  height: 461px;
  background: #1a1c22;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 55px;
`

export const AvatarFormText = styled.p`
  color: #fff;
`
