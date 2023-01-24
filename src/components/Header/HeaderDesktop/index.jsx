import React from "react";
import { Menu } from "../Menu"
import { HeaderStyled, ButtonClient } from "./style";

import logo from "../../../assets/logo.webp";

export function HeaderDesktop(){
    return (
        <HeaderStyled>
            <img src={logo}/>

            <Menu display="desktopMenu"/>

            <ButtonClient>Portal do cliente</ButtonClient>
        </HeaderStyled>
    )
}