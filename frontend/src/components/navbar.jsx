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
    <Box sx={{ flexGrow: 1 }} position="sticky" top={"0px"} zIndex={1}>
      <AppBar >
        <Toolbar>
        <Box sx={{
          flexGrow: 1, 
          display:"flex",
          alignItems:"center",
          gap:"8%"
          }} >
        <Typography fontFamily="cursive" variant="h6">
        BLOGS
      </Typography>
          <Typography onClick={()=>navigate("/")} variant="h8" >
            Homepage
          </Typography>
          </Box>
          <Typography onClick={()=>navigate("/favourites")} variant="h8" >Favourites <FavoriteIcon /> </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}