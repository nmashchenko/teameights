import styled from "styled-components";

export const Text = styled.h3`
  font-size: ${(props) => props.fontSize || '18px'};
  font-weight: ${(props) => props.fontWeight || '500'};
  margin: ${(props) => props.margin || '0'};
  color: white;
`

export const ErrorMessage = styled.p`
  font-size: 15px;
  font-weight: 900;
  margin-top: .5rem;
  color: #cf625e;
`
