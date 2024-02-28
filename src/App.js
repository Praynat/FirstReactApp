import { Box, Button, Typography } from "@mui/material";
import "./App.css";
import CardComponent from "./Components/Cards/Components/CardComponent.jsx";
import MyComponent from "./Components/MyComponent.jsx";

function App() {
  const card = {
    _id: "63765801e20ed868a69a62c4",
    title: "first",
    subtitle: "subtitle",
    description: "testing 123",
    phone: "050-0000000",
    email: "test@gmail.com",
    web: "https://www.test.co.il",
    image: {
      url: "assets/images/Image20240225210746.jpg",
      alt: "Business card image",
    },
    address: {
      state: "",
      country: "country",
      city: "tel-aviv",
      street: "Shinkin",
      houseNumber: 3,
      zip: 1234,
    },
    bizNumber: 1000000,
    user_id: "63765801e20ed868a69a62c2",
  };
  const myStyle ={
    display:"flex",
    flexDirection:"column",
    justifyContent:"center", 
    alignItems:"center",
    width:"100vw",
    height:"100vh",
    backgroundColor:"beige"
  }

  return (
    <>
      <Box sx={myStyle}>
        <MyComponent></MyComponent>
          <Typography variant='h3'>Hello</Typography>
          <Button variant="contained" color="primary">
            Click Me
          </Button>
      </Box>

      <Box sx={myStyle}>
        <CardComponent card={card}/>
      </Box>

      <Box>
      
      </Box>
    

    </>
  )
}

export default App