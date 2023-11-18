import { Box, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import PostCard from "../components/postCard";
import axios from "axios";
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';

export default function Favouritespage(){
    const[posts,setPosts] = useState([]);

    const getAllFavoritePosts = ()=>{
        axios.get("https://noweasydigital-mockserver.onrender.com/favourites")
        .then(res=>setPosts(res.data))
        .catch(err=>console.log(err))
    }

    useEffect(()=>{
        getAllFavoritePosts();
    },[]);

    const removeFromFavorite=(postID)=>{
        axios.delete(`https://noweasydigital-mockserver.onrender.com/favourites/${postID}`)
        .then(res=>getAllFavoritePosts())
        .catch(err=>console.log(err))

    }
    return(
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
                <Box onClick={()=>removeFromFavorite(ele.id)} color={"red"}><HeartBrokenIcon /> </Box>
                <PostCard id={ele.id} image={ele.image} title={ele.title} />
            </Grid>
            )
        }
    </Grid>
    )
}