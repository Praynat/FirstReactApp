import { Box, Button } from '@mui/material';
import React, { useState } from 'react';

export default function MyBox2() {
  const [mySize, setmySize] = useState(10);
  const increaseSize = () => {
    if (mySize <= 200) {
      setmySize((prev) => prev + 10);
    }
  };
  const decreaseSize = () => {
    if (mySize > 10) {
      setmySize((prev) => prev - 10);
    }
  };

  return (
    <>
      <Box sx={{ width: '100%', height: "10%", display: 'flex', justifyContent: 'center', marginBottom: '2rem', gap: "1rem" }}>
        <Button sx={{ fontSize: "2rem" }} variant="contained" onClick={increaseSize}>
          +
        </Button>
        <Button sx={{ fontSize: "2rem" }} variant="contained" onClick={decreaseSize}>
          -
        </Button>
      </Box>
      <Box sx={{ display: "flex",height: "15%", justifyContent: "center" }}>
        <Box sx={{ backgroundColor: "red", height: mySize, width: mySize }}></Box>
      </Box>
    </>
  );
}