// * Modules
import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.figure`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const UserInformationContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 32px;
`

export const UserImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 5px;
  object-fit: cover;
  user-select: none;
`

export const AndMore = styled.span`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  color: ${(props) => (props.makeWhite ? '#000' : '#FFF')};
`

export const ProgrammingLanguagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  align-items: center;
  width: 57%;
  margin-bottom: 10px;
`

export const LanguageContainer = styled.div`
  position: relative;
  background: #2f3239;
  border-radius: 5px;
  width: ${(props) => props.width || '40px'};
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  height: 60px;
`

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`

export const CountryContainer = styled.div`
  display: flex;
  align-items: center;
`

export const TitleText = styled.h3`
  font-weight: ${(props) => props.fontWeight || '400'};
  font-size: ${(props) => props.fontSize || '13px'};
  color: ${(props) => props.color || '#FFF'};
  margin: ${(props) => props.margin || '0px'};
`

export const Framework = styled.div`
  width: ${(props) => props.width || '91px'};
  height: 32px;
  margin-right: ${(props) => props.marginRight || '0'};
  margin-bottom: ${(props) => props.marginBottom || '0'};
  flex-grow: ${(props) => props.flexGrow || '1'};
  background: ${(props) => props.background || '#E0FF00'};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  > h3 {
    font-weight: 400;
    font-size: 16px;
    color: ${(props) => props.color || 'white'};
  }
`

export const FrameWorksContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: ${(props) => props.justifyContent || 'start'};
  align-items: center;
  margin-top: 20px;
`

export const CrownContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  transform: rotate(-36.01deg) translate(0, -25px);

  width: 42px;
  height: 42px;

  svg {
    width: 100%;
    height: 100%;
  }
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 230px;
  height: 280px;
  padding: 20px;
  background: #1a1c22;
  border-radius: 15px;
  position: relative;

  &:hover ${CrownContainer} {
    transition: 0.2s ease all;
  }

  :hover {
    border: 1px solid rgba(188, 202, 235, 0.4);
    background: linear-gradient(
      146deg,
      rgba(184, 197, 229, 0.16) 0%,
      rgba(188, 202, 235, 0.08) 100%
    );
    /* shadow 2 */
    box-shadow: 0px 8px 24px 0px rgba(17, 20, 27, 0.2);
    cursor: pointer;
    padding: 19px;
    transition: background, box-shadow, border 0.2s;
  }
`

export const FlagIcon = styled.img`
  width: 25px;
  height: 25px;
`
