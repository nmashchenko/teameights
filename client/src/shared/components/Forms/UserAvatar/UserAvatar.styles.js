import styled from "styled-components";

export const UserAvatar = styled.img`
  width: ${(props) => props.width || '7.8125rem'};
  height: ${(props) => props.height || '7.8125rem'};
  border-radius: 50%;
`