import styled from 'styled-components'

export const CakeBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const RightContainer = styled.div`
  padding: 48px 24px 24px 24px;
  height: 400px;
  width: 270px;
  border-radius: 15px;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background: #26292b;
  background: #1a1c22;
  position: relative;
  display: flex;

  @media screen and (max-width: 1024px) {
    max-width: 570px;
    width: 100%;
  }
`

export const SVGAndText = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin || '0'};
`

export const EditImageButton = styled.button`
  position: absolute;
  right: -5%;
  bottom: 19%;
  cursor: pointer;
  background: #46a11b;
  border-radius: 50%;
  border: none;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
  opacity: ${(props) => (props.editImage ? '0' : '1')};
  svg {
    width: 20px;
    height: 20px;
  }
`

export const TeamImgBorder = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 24px;
  object-fit: cover;
  user-select: none;
`

export const TeamInformationContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
