import styled from 'styled-components'

export const NotificationModalDiv = styled.div`
  background: linear-gradient(180deg, rgba(26, 28, 34, 0.5) 0%, rgba(40, 47, 71, 0.5) 100%);
  border-radius: 15px;
  z-index: 9999;
  transform: translate(50%, 0%);
  position: absolute;
  width: 250px;
  height: 60%;
  padding: 15px;
  overflow: hidden;
  top: 10rem;
  left: 5rem;
  outline: none;
  color: #fff;
`

export const NotificationBackDrop = styled.div`
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`

export const NotificationToggle = styled.div`
  cursor: pointer;
`

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  //   padding: 0 10px;
`
export const NotificationTitle = styled.h4`
  margin: 0;
  margin-left: 2px;
  text-align: start;
  font-weight: 300;
`
export const Join = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

export const NotificationData = styled.ul`
  margin-top: 24px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: hidden;
  list-style: none;
`

export const Notification = styled.li`
  width: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 5px;
  border-radius: 4px;
  background: #26292b;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.02), 0px 2px 4px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  cursor: pointer;
`

export const NotificationUserImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 4px;
`

export const NotificationUserRealName = styled.strong`
  margin: 0;
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
`

export const NotificationDesc = styled.p`
  margin: 0;
  font-size: 10px;
  line-height: 1;
`

export const NotificationUserData = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 1px;
`
