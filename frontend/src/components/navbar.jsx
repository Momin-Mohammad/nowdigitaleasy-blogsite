import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {useNavigate} from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static">
        <Toolbar>
        <Box sx={{
          flexGrow: 1, 
          display:"flex",
          gap:"8%"
          }} >
        <Typography fontFamily="cursive" variant="h5">
        BLOGS
      </Typography>
          <Typography onClick={()=>navigate("/")} variant="h5" >
            Homepage
          </Typography>
          </Box>
          <Typography onClick={()=>navigate("/favourites")} variant="h5" >Favourites <FavoriteIcon /> </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}