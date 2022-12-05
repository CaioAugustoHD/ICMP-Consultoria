import React from "react";
import { ButtonNews, InputEmail, NewsStyled, TermsMessage } from "./style";

export function News(){
    return (
        <NewsStyled>
            <h3>Receba nossas novidades por e-mail</h3>

            <div>
                <InputEmail type="text" />
                <ButtonNews>Enviar</ButtonNews>
            </div>

            <TermsMessage>
                <p>Ao assinar nossa newsletter, você afirma conhecer e concordar com nossa política de privacidade</p>
            </TermsMessage>
        </NewsStyled>
    )
}