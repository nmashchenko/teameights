// * Modules
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 238px);
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 36px;
  padding: 0 24px 48px 24px;
`

export const Text = styled.h2`
  font-weight: ${(props) => props.fontWeight || '500'};
  color: white;
  text-align: center;
  font-size: ${(props) => props.fontSize || '24px'};
  margin: 0;
`

export const NonFoundContainer = styled.div`
  width: 100%;
  max-width: 650px;
  height: auto;
`
