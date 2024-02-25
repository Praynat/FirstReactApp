import { Box, Typography, Button } from '@mui/material';
import './App.css';
import MyComponent from './Components/MyComponent';

function App() {
const myStyle ={
  display:"flex",
  flexDirection:"column",
  justifyContent:"center", 
  alignItems:"center",
  width:"100vw",
  height:"100vh",
  backgroundColor:"beige"
}


  return  <Box> 
  <Box sx={myStyle}>
    <MyComponent></MyComponent>
      <Typography variant='h3'>Hello</Typography>
      <Button variant="contained" color="primary">
        Click Me
      </Button>
  </Box>

  <Box sx={myStyle}>
    
  </Box>
    
    </Box>
  // <div style={myStyle}>
    
  //   <MyComponent></MyComponent>
  
  // </div>
  // return (
    
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React Now
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
