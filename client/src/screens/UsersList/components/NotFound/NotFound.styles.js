// * Modules
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;

  @media screen and (min-width: 0) and (max-width: 980px) {
    display: flex;
    flex-direction: column;
  }
`

export const TopText = styled.h2`
  font-family: 'Montserrat';
  font-weight: 700;
  color: white;
  text-align: center;
  font-size: 42px;
  margin: 0 0 20px 0;

  @media screen and (min-width: 980px) and (max-width: 1250px) {
    font-size: 32px;
  }

  @media screen and (min-width: 510px) and (max-width: 980px) {
    font-size: 30px;
    margin: 20px 0 20px 0;
  }

  @media screen and (min-width: 0) and (max-width: 510px) {
    font-size: 23px;
  }
`

export const BotText = styled.h2`
  font-family: 'Montserrat';
  font-weight: 400;
  color: white;
  text-align: center;
  font-size: 25px;
  margin: 0 0 30px 0;

  @media screen and (min-width: 980px) and (max-width: 1250px) {
    font-size: 23px;
  }

  @media screen and (min-width: 510px) and (max-width: 980px) {
    font-size: 20px;
  }

  @media screen and (min-width: 0) and (max-width: 510px) {
    font-size: 17px;
  }
`

export const Button = styled.button`
  border: none;
  cursor: pointer;
  width: 211px;
  height: 55px;
  background: #5D9D0B;
  box-shadow: 0px 0px 50px rgba(93, 157, 11, 0.15);
  border-radius: 5px;
  font-family: 'Montserrat';
  font-weight: 700;
  color: white;
  font-size: 16px;
  transition: 0.3s ease;

  &:hover {
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
    transform: scale(1.05);
  }
`

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: 50px;
  
  @media screen and (min-width: 980px) and (max-width: 1250px) {
    margin-right: 20px;
  }

  @media screen and (min-width: 0) and (max-width: 980px) {
    order: 2;
    margin: 70px 0 0 0;
  }
`

export const TextContainer = styled.div`
  max-width: 360px;
`

export const NonFoundContainer = styled.div`
  width: 675px;
  height: 400px;
  margin-bottom: 20px;

  @media screen and (min-width: 980px) and (max-width: 1250px) {
    width: 600px;
    height: 350px;
  }

  @media screen and (min-width: 510px) and (max-width: 980px) {
    order: 1;
    margin-bottom: 0;
    width: 453px;
    height: 257px;
  }

  @media screen and (min-width: 0) and (max-width: 510px) {
    order: 1;
    margin-bottom: 0;
    width: 310px;
    height: 183px;
  }
`