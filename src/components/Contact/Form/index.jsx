import React from "react";
import { FormStyled, InputContainer, SelectContainer, TextareaContainer } from "./style";

export function Form(){
    return (
        <FormStyled>

            <InputContainer>
                <label htmlFor="input-nome">Nome</label>
                <input type="text" id="input-nome"/>
            </InputContainer>

            <InputContainer>
                <label htmlFor="input-empresa">Empresa</label>
                <input type="text" id="input-empresa"/>
            </InputContainer>

            <InputContainer>
                <label htmlFor="input-email">Email</label>
                <input type="text" id="input-email"/>
            </InputContainer>

            <InputContainer>
                <label htmlFor="input-telefone">Telefone</label>
                <input type="text" id="input-telefone"/>
            </InputContainer>


            <SelectContainer>
                <label htmlFor="input-servico">Serviço</label>
                <select defaultValue={1} placeholder="sele" id="input-servico">

                    <option value="1" disabled style={{display: "none"}}>Selecione um serviço</option>

                    <option value="2">Consultoria em TI</option>
                    <option value="3">Projetos de TI</option>
                    <option value="4">Projetos de rede</option>
                    <option value="5">Outros</option>

                </select>
            </SelectContainer>

            <TextareaContainer>
                <textarea placeholder="Detalhes sobre sua solicitação..." rows="5"/>
            </TextareaContainer>

        </FormStyled>
    )
}