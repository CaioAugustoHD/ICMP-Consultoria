import React from "react";
import { PartnersStyled, Title, Text } from "./style";

import { Cards } from "./Cards";


export function Partners(){
    return (
        <PartnersStyled>

            <Title>Parceiros estratégicos</Title>
            <Text>Trabalhamos em parceria com algumas das maiores empresas de tecnologia do mundo, visando sempre oferecer o que há de melhor para nossos clientes. Temos parceiros nas áreas de hardware e software, que proporcionam aos nossos clientes atualização tecnológica, aumento nos resultados e otimização de recursos sem dispersão de investimentos</Text>

            <Cards/>

        </PartnersStyled>
    )

}