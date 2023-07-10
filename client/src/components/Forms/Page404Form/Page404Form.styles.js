import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: ${(props) => props.paddingLeft || '0'};
  flex-direction: column;
  gap: 48px;

  @media screen and (max-width: 768px) {
    padding-left: 0;
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
  width: 100%;
  max-width: 160px;
  height: 48px;
  padding: 0px 16px;
  background: #46a11b;
  border-radius: 10px;
  color: white;
  font-weight: 400;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: all 0.2s linear;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`
