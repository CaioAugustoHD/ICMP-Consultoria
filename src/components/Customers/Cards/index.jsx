import React from "react";
import { CardsStyled, Card} from "./style";

import cardOsf from "../../../assets/card-osf.webp";
import cardPacto from "../../../assets/card-pacto.webp";
import cardGerdau from "../../../assets/card-gerdau.webp";
import cardSams from "../../../assets/card-sams.webp";

export function Cards(){
    return (
        <CardsStyled>

            <Card src={cardOsf} alt=""/>
            <Card src={cardPacto} alt=""/>
            <Card src={cardGerdau} alt=""/>
            <Card src={cardSams} alt=""/>

        </CardsStyled>
    )
}