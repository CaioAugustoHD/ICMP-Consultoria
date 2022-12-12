import React from "react";
import { SidebarStyled } from "./style";

import { FaTimes } from "react-icons/fa";

export function Sidebar({showSidebar}){
    return (
        <SidebarStyled>
            <FaTimes onClick={showSidebar}/>
        </SidebarStyled>
    )
}