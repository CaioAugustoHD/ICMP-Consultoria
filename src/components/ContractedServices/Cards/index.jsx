import React from "react";
import { Card, CardStyled } from "./style";

import iconeConsultoria from "../../../assets/icone-consultoria.webp";
import iconeProjetos from "../../../assets/icone-projetos.webp";
import iconeSuporte from "../../../assets/icone-suporte.webp";

export function Cards(){
    return (
        <CardStyled>

            <Card>
                <img src={iconeSuporte}/>
                <h4>Suporte de TI</h4>
                <p>Suporte e gestão de TI para pequenas e médias empresas. Atendimento remoto e presencial, equipe especializada e certificada</p>
            </Card>

            <Card>
                <img src={iconeConsultoria}/>
                <h4>Consultoria em TI</h4>
                <p>Avaliação de ativos de TI com documentação e recomendações de consultores certificados e especializados em redes corporativas</p>
            </Card>

            <Card>
                <img src={iconeProjetos}/>
                <h4>Projetos de redes</h4>
                <p>Projetos para redes de dados e voz, cabeamento estruturado, implantação de servidores on premise ou em nuvem, CFTV e rede sem fios</p>
            </Card>

        </CardStyled>
    )
}