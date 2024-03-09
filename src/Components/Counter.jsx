import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react'

export default function Counter() {

    const[counter,setCounter] = useState(0);
    const increment = ()=>{setCounter(counter+1)}
    const decrement = ()=>{setCounter(counter-1)}
  return (
    <Box sx={{display:"flex", flexDirection:"column", alignItems:"center", gap:"1rem"  }}>
        <Box sx={{display:"flex", gap:"1rem"}}>
            <Button variant='contained' onClick={increment}>+</Button>
            <Button variant='contained' onClick={decrement}>-</Button>
        </Box>
        <Typography variant='h3'>{counter}</Typography>
    </Box>
  )
}
