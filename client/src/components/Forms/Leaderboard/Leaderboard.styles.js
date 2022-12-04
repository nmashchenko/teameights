import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #26292b;
`

export const Text = styled.h1`
  font-weight: ${(props) => props.fontWeight || '400'};
  font-size: ${(props) => props.fontSize || '16px'};
  color: ${(props) => props.color || 'white'};
  text-align: ${(props) => props.alignment || 'start'};
  margin: ${(props) => props.marginAll || '0'};
`

export const Content = styled.div`
  min-height: calc(100vh - 78px);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BaseContainer = styled.div`
  width: 774px;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  background: #1a1c22;
  border-radius: 15px;
  padding: 2rem 5rem;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #26292b;
  border-radius: 5px;
  padding: 5px 15px;
  margin-bottom: 14px;
`

export const TextCTA = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
