import React from "react";
import { Cards } from "./Cards";
import { CustomersStyled, Title, Text } from "./style";

export function Customers(){
    return (
        <CustomersStyled>
            
            <Title>Nossos clientes</Title>
            <Text>Temos como clientes, empresas das mais variadas áreas de atuação e de diversos tamanhos, são empresas da construção civil, advocacias, importadoras, empresas de transportes, agências digitais e de muitas outras áreas. Somos a empresa de TI com os clientes mais satisfeitos do mercado, possuímos um índice de 98,3% de satisfação</Text>

            <Cards/>

        </CustomersStyled>
    )
}