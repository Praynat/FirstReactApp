import {
    Card,
    CardActionArea
  } from "@mui/material";

  

import React from 'react'
import CardImageComponent from "./CardImageComponent";
import CardBodyComponent from "./CardBodyComponent";

import CardActionbar from "./CardActionBar";

export default function CardComponent({card,handleCardDelete,handleCardLike}) {
  return (
  <Card sx={{ width: 250, m: 2 }}>
    <CardActionArea>
      <CardImageComponent image={card.image}/>
      <CardBodyComponent title={card.title} subtitle={card.subtitle} phone={card.phone} adress ={card.address} cardNumber={card.bizNumber}/>
    </CardActionArea>

    <CardActionbar 
    handleCardDelete={handleCardDelete}
    handleCardLike={handleCardLike}
    cardId={card._id}
    />
  </Card>
);
}
