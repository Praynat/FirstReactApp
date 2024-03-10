import { Box, Button } from '@mui/material'
import React, { useState } from 'react'

export default function MyBox() {
    const[myColor, setmyColor]=useState("red");
    const changeColor= ()=>{
       myColor==="red"? setmyColor("blue"):setmyColor("red") }
  return (
    <Box sx={{display:"flex", flexDirection:"column",alignItems:"center" ,}}>
    <Button sx={{mb:"1rem", fontSize:"2rem"}} variant='contained' onClick={changeColor}>Change The Color</Button>
    <Box sx={{backgroundColor:myColor , height:"100px", width:"100px"}}></Box>
    </Box>
  )
}
