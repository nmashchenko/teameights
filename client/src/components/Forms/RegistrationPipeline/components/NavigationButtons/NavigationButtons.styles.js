import styled from "styled-components";

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: ${(props) => props.marginTop || '3rem'};
  align-items: center;
`