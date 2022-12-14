import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  background: #26292b;
  align-items: center;
  justify-content: center;
`
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  padding: 5rem 0;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 995px) {
    flex-direction: column;
    padding: 0;
  }
`
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`
export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  @media (max-width: 995px) {
    width: 75%;
  }
`
export const H1 = styled.h1`
  font-weight: 600;
  font-size: 7rem;
  color: white;
  padding: 0 2rem;
  margin: 0;
`
export const Text = styled.p`
  font-weight: 500;
  font-size: 2rem;
  color: white;
  padding: 0 2rem;
  margin: 0;
  text-align: center;
`
export const TextSmall = styled.p`
  font-weight: 400;
  font-size: 1rem;
  color: white;
  padding: 0 2rem;
  margin: 0;
  text-align: center;
`
export const Button = styled.button`
  width: 14rem;
  height: 3.5rem;
  background: #5d9d0b;
  box-shadow: 0px 0px 50px rgba(93, 157, 11, 0.15);
  border-radius: 5px;
  color: white;
  font-weight: 700;
  font-size: 1rem;
  border-style: none;
  cursor: pointer;
  transition: all 0.2s linear;
  margin-top: 1rem;

  :hover {
    transform: scale(1.1);
  }
`
