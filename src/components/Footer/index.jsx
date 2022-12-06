import React from "react";
import { Copyright, FooterStyled, SectionContact, SectionInstitutional, SectionServices, Title } from "./style";

export function Footer(){
    return (
        <FooterStyled>
            <SectionContact>
                <Title>Contato</Title>
                <div>
                    <span>Endereço:</span>
                    <span>Av. Paulista, 1.765, 7º Andar, Bela Vista, São Paulo - SP</span>
                </div>

                <div>
                    <span>E-mail:</span>
                    <span>contato@icmpconsultoria.com.br</span>
                </div>

                <div>
                    <span>Telefone:</span>
                    <span>+55 11 3090-6775</span>
                </div>

                <div>
                    <span>Horário de atendimento:</span>
                    <span>Segunda à Sexta das 09:00hs às 18:00hs</span>
                </div>
            </SectionContact>

            <SectionInstitutional>
                <Title>Institucional</Title>

                <ul>
                    <li>Sobre nós</li>
                    <li>Blog</li>
                    <li>Contato</li>
                    <li>Parceiros</li>
                    <li>Clientes</li>
                    <li>Política de privacidade</li>
                </ul>
            </SectionInstitutional>

            <SectionServices>
                <Title>Serviços</Title>
                <ul>
                    <li>Assessoria em TI</li>
                    <li>Consultoria em TI</li>
                    <li>Empresa de TI</li>
                    <li>Gestão de TI</li>
                    <li>Outsourcing de TI</li>
                    <li>Projetos de redes</li>
                    <li>Suporte de TI</li>
                    <li>Suporte Apple</li>
                    <li>Suporte Linux</li>
                    <li>Terceirização de TI</li>
                </ul>
            </SectionServices>

            <Copyright>
                <span>© Desde 2016. CNPJ: 25.357.501/0001-50. Site desenvolvido por Caio Augusto Pereira</span>
            </Copyright>
        </FooterStyled>
    )
}