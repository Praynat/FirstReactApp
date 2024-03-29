import { Box, Button, Typography } from "@mui/material";
import "./App.css";
import MyComponent from "./Components/MyComponent.jsx";
import TasksPage from "./Tasks/TasksPage.jsx";
import CardsPage from "./Components/Cards/Components/CardsPage.jsx";
import Counter from "./Components/Counter.jsx";
import MyBox from "./Components/MyBox.jsx";
import MyBox2 from "./Components/MyBox2.jsx";
import AddNewTask from "./Tasks/AddNewTask.jsx";
import FormPage from "./Components/Form Page.jsx";
function App() {
  const myStyle ={
    display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  height: "100vh",
  backgroundColor: "beige"
  }

  return (
    <>
      <Box sx={myStyle}>
        <MyComponent></MyComponent>
          <Typography variant='h2'>Hello</Typography>
          <Button sx={{mt:"2rem"}} variant="contained" color="primary">
            Click Me
          </Button>
      </Box>

      <Box sx={myStyle}>
        <CardsPage/>
      </Box>

      <Box sx={myStyle}>
        <AddNewTask/>
        <TasksPage/>
      </Box>
    
      <Box sx={myStyle}>
        <Counter/>
      </Box>

      <Box sx={myStyle}>
        <MyBox/>
      </Box>

      <Box sx={myStyle}>
        <MyBox2/>
      </Box>

      <Box sx={myStyle}>
        <FormPage/>
      </Box>
    </>
  )
}

export default App