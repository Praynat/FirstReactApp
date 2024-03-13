import { Button, Card, CardHeader, Divider,TextField } from '@mui/material'
import React, { useState } from 'react'

export default function AddNewTask() {
    const[name,setName]=useState("");
    const[type,setType]=useState("");
    const[date,setDate]=useState("");
  return (<>
    <Card sx={{m:"1rem"}}>
        <CardHeader title={"Tasks"} >
        </CardHeader>
    </Card>


   <Card sx={{display:"flex", alignItems:"center", gap:"2rem", m:"1rem", p:"1rem"}}>
       
        <TextField placeholder='Name' type="text" value={name} onChange={(event)=>setName(event.target.value)}></TextField>
    
            <Divider orientation='vertical' variant='middle'/>

        <TextField placeholder='Type' type="text" value={type} onChange={(event)=>setType(event.target.value)}></TextField>

            <Divider orientation='vertical' variant='middle'/>
    
        <TextField placeholder='Name' type="date" value={date} onChange={(event)=>setDate(event.target.value)}></TextField>

            <Divider orientation='vertical' variant='middle'/>

        <Button variant='outlined' onClick={()=>{
            console.log(name,type,date);
        }}>Add New Task</Button>
   </Card>
   </>
  )
}
