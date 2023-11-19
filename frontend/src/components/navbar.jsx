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
    <Box 
    sx={{ flexGrow: 1, }} 
    position="sticky" 
    top={"0px"} 
    zIndex={1} >
      <AppBar>
        <Toolbar
         sx={{
          backgroundImage:"linear-gradient(to right, rgb(28, 149, 255),rgb(61, 148, 148),rgb(73, 163, 73))",
          color:"black",
          fontWeight:"bolder",
          fontFamily:"cursive"
          }}>
        <Box sx={{
          flexGrow: 1, 
          display:"flex",
          alignItems:"center",
          gap:"8%"
          }} >
        <Typography border={"3px solid black"} fontWeight={"bolder"} p={"0.5% 1%"} variant="h6">
        BLOGS
      </Typography>
          <Typography sx={{cursor:"pointer"}} onClick={()=>navigate("/")} variant="h7">
            Homepage
          </Typography>
          </Box>
          <Typography 
          sx={{cursor:"pointer"}}
          display={"flex"} 
          color={"red"}
          gap={"3%"} 
          alignItems={"center"} 
          onClick={()=>navigate("/favourites")} 
          variant="h8" > <FavoriteIcon /> </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}