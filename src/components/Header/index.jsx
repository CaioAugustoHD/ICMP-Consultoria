import React, { useEffect, useState } from "react";

import { HeaderDesktop } from "./HeaderDesktop";
import { HeaderMobile } from "./HeaderMobile";

export function Header(){

    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 900px)").matches
      );

      useEffect(() => {
        window
        .matchMedia("(min-width: 900px)")
        .addEventListener('change', e => setMatches( e.matches ));
      }, []);
    

    return (
        <>
            {matches 
                ? <HeaderDesktop/> 
                : <HeaderMobile/>
            }
        </>
    )
}