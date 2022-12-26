import React from 'react';
import {Container} from "./NavbarItemPageLayout.styles";
import TopTemplate from "../../components/TopTemplate/TopTemplate";
import {Outlet} from "react-router-dom";

const NavBarItemPageLayout = () => {
    return (
        <Container>
            <TopTemplate />
            <Outlet />
        </Container>
    );
};

export default NavBarItemPageLayout;
