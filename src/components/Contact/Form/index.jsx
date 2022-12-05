import React from "react";
import { ButtonForm, ErrorMessage, FormStyled, InputContainer, SelectContainer, TextareaContainer } from "./style";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    nome: yup.string().required("Digite seu nome"),
    empresa: yup.string(),
    email: yup.string().email("Email inválido!").required("Digite seu email"),
    telefone: yup.number().required("Digite seu telefone").typeError('Telefone inválido!'),
  }).required();

export function Form(){

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
      });
    const onSubmit = data => console.log(data);

    return (
        <FormStyled onSubmit={handleSubmit(onSubmit)}>

            <InputContainer>
                <label htmlFor="input-nome">Nome</label>
                <input type="text" id="input-nome" {...register("nome")}/>

                <ErrorMessage>{errors.nome?.message}</ErrorMessage>
            </InputContainer>

            <InputContainer>
                <label htmlFor="input-empresa">Empresa</label>
                <input type="text" id="input-empresa" {...register("empresa")}/>

                <ErrorMessage>{errors.empresa?.message}</ErrorMessage>
            </InputContainer>

            <InputContainer>
                <label htmlFor="input-email">Email</label>
                <input type="text" id="input-email" {...register("email")}/>

                <ErrorMessage>{errors.email?.message}</ErrorMessage>
            </InputContainer>

            <InputContainer>
                <label htmlFor="input-telefone">Telefone</label>
                <input id="input-telefone" {...register("telefone")}/>

                <ErrorMessage>{errors.telefone?.message}</ErrorMessage>
            </InputContainer>


            <SelectContainer>
                <label htmlFor="input-servico">Serviço</label>
                <select defaultValue={1} placeholder="sele" id="input-servico" {...register("servico")}>

                    <option value="1" disabled style={{display: "none"}}>Selecione um serviço</option>

                    <option value="2">Consultoria em TI</option>
                    <option value="3">Projetos de TI</option>
                    <option value="4">Projetos de rede</option>
                    <option value="5">Outros</option>

                </select>
            </SelectContainer>

            <TextareaContainer>
                <textarea placeholder="Detalhes sobre sua solicitação..." rows="5" {...register("detalhes")}/>
            </TextareaContainer>

            <ButtonForm type="submit">Enviar</ButtonForm>

        </FormStyled>
    )
}