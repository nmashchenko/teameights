import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  background: #26292b;
  align-items: center;
  justify-content: center;
  padding-left: ${(props) => props.paddingLeft || '0'};
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

export const Text = styled.h1`
  font-weight: ${(props) => props.fontWeight || '500'};
  font-size: ${(props) => props.fontSize || '2rem'};
  color: white;
  padding: 0 2rem;
  margin: 0;
  text-align: ${(props) => props.textAlign || 'center'};
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
