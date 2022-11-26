import React from "react";
import { BannerStyled, TextBannerContainer, Title, Subtitle } from "./style";

export function Banner(){
    return (
        <BannerStyled>

            <TextBannerContainer>
                <Title>Vamos fazer uma gestão em TI completa para sua empresa</Title>
                <Subtitle>Suporte remoto e presencial para TI, consultorias e projetos</Subtitle>
            </TextBannerContainer>

            <figure>
                <img src=""/>
            </figure>

        </BannerStyled>
    )
}