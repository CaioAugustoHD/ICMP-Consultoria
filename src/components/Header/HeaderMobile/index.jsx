import React, { useState } from "react";
import { HeaderStyled } from "./style";

import { FaBars } from "react-icons/fa"
import { Sidebar } from "./Sidebar"

import logo from "../../../assets/logo.webp";

export function HeaderMobile(){

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <HeaderStyled>
            <img src={logo}/>

            <FaBars onClick={showSidebar}/>
            {sidebar
                && <Sidebar showSidebar={showSidebar}/>}
        </HeaderStyled>
    )
}