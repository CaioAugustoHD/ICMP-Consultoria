import React from "react";
import { HeaderStyled, Menu, ButtonClient } from "./style";

import logo from "../../assets/logo.webp";

export function Header(){
    return (
        <HeaderStyled>
            <img src={logo}/>

            <Menu>
                <p>Quem somos</p>
                <p>Serviços</p>
                <p>Contato</p>
            </Menu>

            <ButtonClient>Portal do cliente</ButtonClient>
        </HeaderStyled>
    )
}