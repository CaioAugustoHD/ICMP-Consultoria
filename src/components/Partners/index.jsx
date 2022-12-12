import React from "react";
import { PartnersStyled, Title, Text } from "./style";

import cardBitdefender from "../../assets/card-bitdefender.webp";
import cardDraytek from "../../assets/card-draytek.webp";
import cardMicrosoft from "../../assets/card-microsoft.webp";
import cardDell from "../../assets/card-dell.webp";

import { Cards } from "../Cards";


export function Partners(){
    return (
        <PartnersStyled>

            <Title>Parceiros estratégicos</Title>
            <Text>Trabalhamos em parceria com algumas das maiores empresas de tecnologia do mundo, visando sempre oferecer o que há de melhor para nossos clientes. Temos parceiros nas áreas de hardware e software, que proporcionam aos nossos clientes atualização tecnológica, aumento nos resultados e otimização de recursos sem dispersão de investimentos</Text>

            <Cards
                card1={cardBitdefender} alt1="Bitdefender"
                card2={cardDraytek} alt2="Dray Tek"
                card3={cardMicrosoft} alt3="Microsoft"
                card4={cardDell} alt4="Dell"
            />

        </PartnersStyled>
    )

}