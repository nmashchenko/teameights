import styled from "styled-components";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";

import { LIME, WHITE, BLACK, GREY } from "../../../../constants/colors";
import { device } from "../../../../constants/breakpoints";

export const NavBar = styled(Toolbar)`
  &.css-hyum1k-MuiToolbar-root {
    background: transparent;
  }
`;

export const BoxContainer = styled(Box)`
  padding: 27px 45px;
`;

export const NavIconContainer = styled.div`
  margin-right: 20px;
`;

export const LogoContainer = styled.div`
  margin-right: 7%;
`;

export const Button = styled.button`
  border: none;
  outline: none;
  background: none;
  width: 46px;
  height: 45px;
  cursor: pointer;
`;

export const SelectContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
