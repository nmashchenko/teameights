// * Modules
import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const UserInformationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const UserImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 5px;
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
  background: #1b1d24;
  border-radius: 5px;
  width: 50px;
  height: 50px;
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
`

export const TitleText = styled.h3`
  font-family: 'Montserrat';
  font-weight: ${(props) => props.fontWeight || '400'};
  font-size: ${(props) => props.fontSize || '13px'};
  color: ${(props) => props.color || '#FFF'};
  margin: ${(props) => props.margin || '0px'};
`

export const Framework = styled.div`
  width: ${(props) => props.width || '65px'};
  height: 40px;
  margin-right: ${(props) => props.marginRight || '0px'};
  margin-bottom: ${(props) => props.marginBottom || '10px'};
  flex-grow: 1;
  background: ${(props) => props.background || '#E0FF00'};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  > h3 {
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 14px;
    color: ${(props) => props.color || 'white'};
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`

export const FrameWorksContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  height: 120px;
  justify-content: ${(props) => props.justifyContent || 'start'};
  align-items: center;
  margin-top: 20px;
`

export const CrownContainer = styled.div`
  position: absolute;
  margin-bottom: 300px;
  margin-right: 235px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 240px;
  height: 300px;
  padding: 25px 22px;
  background: #2e3239;
  box-shadow: 0px 2px 25px rgba(0, 0, 0, 0.12);
  border-radius: 15px;

  &:hover {
    cursor: pointer;
    background: #1b1d24;
    box-shadow: 0px 5px 25px rgba(95, 122, 219, 0.1);
    transition: 0.3s ease-in-out;
    -webkit-transform: scale(1.02);
    -ms-transform: scale(1.02);
    transform: scale(1.02);
  }

  &:hover ${LanguageContainer} {
    background: rgba(46, 50, 57, 0.35);
    transition: 0.1s ease-in-out;
  }

  &:hover + ${CrownContainer} {
    transition: 0.3s ease-in-out;
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }

  @media screen and (min-width: 1440px) {
    width: 240px;
    height: 300px;
  }
`
