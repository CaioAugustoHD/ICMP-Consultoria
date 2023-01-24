import React from "react";
import { Menu } from "../../Menu"
import { ButtonClient, SidebarStyled } from "./style";

import { FaTimes } from "react-icons/fa";

export function Sidebar({showSidebar}){
    return (
        <SidebarStyled>
            <FaTimes onClick={showSidebar}/>

            <Menu display="mobileMenu"/>

            <ButtonClient>Portal do cliente</ButtonClient>

        </SidebarStyled>
    )
}