import React from "react";
import { Form } from "./Form";
import { ContactStyled, Title, Text } from "./style";

export function Contact(){
    return (
        <ContactStyled id="contact">
            <Title>
                Precisa de mais informações? <br/>
                Fale com um especialista!
            </Title>

            <Text>Estamos aqui para ajudá-lo, encaminhe sua solicitação e nós ligamos para você</Text>

            <Form/>
            
        </ContactStyled>
    )
}