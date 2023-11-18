import { Box, Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import axios from 'axios';
import PostCard from "../components/postCard";
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Homepage(){
    const[posts,setPosts] = useState([]);

    useEffect(()=>{
        axios.get("https://noweasydigital-mockserver.onrender.com/posts")
        .then(res=>setPosts(res.data))
        .catch(err=>console.log(err))
    },[]);

    const addToFavorite=(post)=>{
        axios.post("https://noweasydigital-mockserver.onrender.com/favourites",post)
        .then(res=>alert("Added to favorites"))
        .catch(err=>console.log(err))

    }
    return(
        <Container >
            Home page
           <hr/>
            <Grid container >
                {
                    posts?.map((ele)=>
                    <Grid item
                    margin={"auto"}
                    padding={2}
                    xs={10} 
                    md={5}
                    lg={5}
                    key={ele.id} >
                        <Box onClick={()=>addToFavorite(ele)} color={"red"}><FavoriteIcon /> </Box>
                        <PostCard id={ele.id} image={ele.image} title={ele.title} />
                    </Grid>
                    )
                }
            </Grid>
        </Container>
    )
}