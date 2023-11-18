import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function PostCard({title,image,id}) {
    const navigate = useNavigate();
  return (
    <Card onClick={()=>navigate(`/post/${id}`)} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="post image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illum distinctio ipsa modi porro consequatur possimus vel praesentium nulla placeat optio fugit, 
            quibusdam laborum, sunt quaerat ullam sapiente nemo quae!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}