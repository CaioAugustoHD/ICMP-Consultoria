import React from "react";
import { CustomersStyled, Title, Text } from "./style";

import cardOsf from "../../assets/card-osf.webp";
import cardPacto from "../../assets/card-pacto.webp";
import cardGerdau from "../../assets/card-gerdau.webp";
import cardSams from "../../assets/card-sams.webp";

import { Cards } from "../Cards";


export function Customers(){
    return (
        <CustomersStyled>
            
            <Title>Nossos clientes</Title>
            <Text>Temos como clientes, empresas das mais variadas áreas de atuação e de diversos tamanhos, são empresas da construção civil, advocacias, importadoras, empresas de transportes, agências digitais e de muitas outras áreas. Somos a empresa de TI com os clientes mais satisfeitos do mercado, possuímos um índice de 98,3% de satisfação</Text>

            <Cards
                card1={cardOsf} alt1="OSF Digital"
                card2={cardPacto} alt="Pacto Global"
                card3={cardGerdau} alt3="Gerdau"
                card4={cardSams} alt4="Sam's club"
            />

        </CustomersStyled>
    )
}