import React from "react";
import { Card, CardsStyled } from "./style";

export function Cards(props){
    return (
        <CardsStyled>

            <Card src={props.card1} alt={props.alt1}/>

            <Card src={props.card2} alt={props.alt2}/>

            <Card src={props.card3} alt={props.alt3}/>

            <Card src={props.card4} alt={props.alt4}/>

        </CardsStyled>
    )
}