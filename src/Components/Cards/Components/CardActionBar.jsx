import { Box, CardActions, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import CallIcon from '@mui/icons-material/Call';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React from 'react'

export default function CardActionbar({handleCardDelete,handleCardLike,cardId}) {
  return (
    <>
    <CardActions sx={{ paddingTop: 0, justifyContent: "space-between" }}>
      <Box>
        <IconButton onClick={()=>{
          handleCardDelete(cardId)
        }}>
          <DeleteIcon />
        </IconButton>
        <IconButton>
          <ModeEditIcon />
        </IconButton>
      </Box>
      <Box>
        <IconButton>
          <CallIcon />
        </IconButton>
        <IconButton >
          <FavoriteIcon onClick={()=>{
          handleCardLike(cardId)
        }}/>
        </IconButton>
      </Box>
    </CardActions>

    </>
  )
}
