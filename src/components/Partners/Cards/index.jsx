import React from "react";
import { Card, CardStyled } from "./style";

import cardBitdefender from "../../../assets/card-bitdefender.webp";
import cardDraytek from "../../../assets/card-draytek.webp";
import cardMicrosoft from "../../../assets/card-microsoft.webp";
import cardDell from "../../../assets/card-dell.webp";

export function Cards(){
    return (
        <CardStyled>

            <Card src={cardBitdefender} alt=""/>

            <Card src={cardDraytek} alt=""/>

            <Card src={cardMicrosoft} alt=""/>

            <Card src={cardDell} alt=""/>

        </CardStyled>
    )
}