import AppBar from "@mui/material/AppBar";

// * Assets
import SiteLogo from "../../../../assets/SiteLogo";
import NavBarIcon from "../../../../assets/NavBarIcon"
import SelectField from "../SelectField/SelectField"

import {
  NavBar,
  BoxContainer,
  NavIconContainer,
  LogoContainer,

} from './TopBar.styles'

function TopBar() {
  return (
    <>
      <BoxContainer sx={{ flexGrow: 1}}>
        <AppBar position="static" elevation={0} sx={{background: 'transparent'}}>
          <NavBar>
            <NavIconContainer>
              <NavBarIcon />
            </NavIconContainer>
            <LogoContainer>
              <SiteLogo />
            </LogoContainer>
            <div style={{marginRight: '100px'}}>
              <SelectField inputName={'Country'}/>
            </div>
            <div style={{marginRight: '100px'}}>
              <SelectField inputName={'Role'}/>
            </div>
            <div>
              <SelectField inputName={'Language'}/>
            </div>
          </NavBar>
        </AppBar>
      </BoxContainer>
    </>
  )
}

export default TopBar