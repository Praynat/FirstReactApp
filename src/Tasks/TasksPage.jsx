  import React from 'react';
import Task from './Task';
import {Card, CardHeader, Typography } from '@mui/material';



export default function TasksPage() {
    const tasks=[
            { name: "Task 1", date: "03-03-2024", type: "שיעורי בית" },
            { name: "Task 2", date: "04-03-2024", type: "כביסה" },
            { name: "Task 3", date: "05-03-2024", type: "קניות" },
            { name: "Task 4", date: "06-03-2024", type: "תיקון" },
            { name: "Task 5", date: "07-03-2024", type: "ניקיון" },
            { name: "Task 6", date: "08-03-2024", type: "בישול" },
            { name: "Task 7", date: "09-03-2024", type: "גינון" },
            { name: "Task 8", date: "10-03-2024", type: "מחקר" },
          ];
    // const tasks=[];

    const mySearch="";

  return tasks.length===0 ?
  (<Typography>
    Ooops... it seems there is no tasks to display
  </Typography>)
  :(
    <>
    <Card sx={{m:"1rem"}}>
        <CardHeader title={"Tasks"} >
        </CardHeader>
    </Card>
    <Task myTasks={tasks} mySearch={mySearch}/>
    </>
  )
}
