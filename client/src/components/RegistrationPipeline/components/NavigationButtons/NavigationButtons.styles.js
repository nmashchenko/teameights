import styled from 'styled-components'

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  // margin-top: ${(props) => props.marginTop || '3rem'};
  align-items: center;

  @media screen and (max-width: 600px) {
    margin-top: 32px;
    gap: 16px;
  }
`

export const MobileStepper = styled.div`
  display: none;
  white-space: nowrap;

  @media screen and (max-width: 600px) {
    display: block;
  }
`
