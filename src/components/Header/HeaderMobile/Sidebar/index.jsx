import React from "react";
import { ButtonClient, Menu, SidebarStyled } from "./style";

import { FaTimes } from "react-icons/fa";

export function Sidebar({showSidebar}){
    return (
        <SidebarStyled>
            <FaTimes onClick={showSidebar}/>

            <Menu>
                <ul>
                    <li>Quem somos</li>
                    <li>Serviços</li>
                    <li>Contato</li>
                </ul>
            </Menu>

            <ButtonClient>Portal do cliente</ButtonClient>

        </SidebarStyled>
    )
}