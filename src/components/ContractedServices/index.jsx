import React from "react";
import { Cards } from "./Cards";
import { ServicesStyled, Title, Text } from "./style";

export function Services(){
    return (
        <ServicesStyled id="contractedServices">

            <Title>Serviços de TI para sua empresa</Title>
            <Text>A ICMP Consultoria em TI é uma empresa de TI que atende negócios de todos os portes e ramos, oferecendo: Gestão completa e suporte de TI, consultoria especializada em redes e servidores, segurança da informação e LGPD, projetos de infraestrutura de redes cabeadas e sem fios, e implantação de projetos de CFTV para ambientes corporativos e condomínios</Text>

            <Cards/>
            
        </ServicesStyled>
    )
}