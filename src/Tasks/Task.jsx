import {Card, CardContent, Table, TableBody, TableCell, TableHead, TableRow,} from '@mui/material';
import React from 'react';

export default function Task({myTasks, mySearch}) {
  return (
  <Card>
    <CardContent>
        <Table sx={{ minWidth: 650 }} aria-label="simple table"n>
            <TableHead>
                <TableRow >
                    <TableCell sx={{fontSize:"1.5rem"}}>Name</TableCell>
                    <TableCell sx={{fontSize:"1.5rem"}}>Type</TableCell>
                    <TableCell sx={{fontSize:"1.5rem"}}>Date</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {myTasks.map((task,index)=>(
                <>
                {task.type.includes(mySearch)? (<TableRow key={index}>
                    <TableCell>{task.name}</TableCell>
                    <TableCell>{task.type}</TableCell>
                    <TableCell>{task.date}</TableCell>
                </TableRow>):null
                }
                </>
            ))}
            </TableBody>
        </Table>
    </CardContent>
  </Card>
  )
}
