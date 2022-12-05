import React from "react";
import { ButtonNews, ErrorMessage, FormNews, InputEmail, NewsStyled, TermsMessage } from "./style";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    email: yup.string().email("Email inválido!").required("Digite seu email"),
  }).required();

export function News(){

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
      });
    const onSubmit = data => console.log(data);

    return (
        <NewsStyled>
            <h3>Receba nossas novidades por e-mail</h3>

            <FormNews onSubmit={handleSubmit(onSubmit)}>

                <ErrorMessage>{errors.email?.message}</ErrorMessage>

                <InputEmail type="text" {...register("email")} />
                <ButtonNews type="submit">Enviar</ButtonNews>

            </FormNews>

            <TermsMessage>
                <p>Ao assinar nossa newsletter, você afirma conhecer e concordar com nossa política de privacidade</p>
            </TermsMessage>
        </NewsStyled>
    )
}