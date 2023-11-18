import { Box, Container, Grid, Button } from "@mui/material";
import { useEffect, useState } from "react";
import axios from 'axios';
import PostCard from "../components/postCard";
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddPostModal from "../components/addPostModal";

export default function Homepage(){
    const[posts,setPosts] = useState([]);

    const getAllPosts = ()=>{
        axios.get("https://noweasydigital-mockserver.onrender.com/posts")
        .then(res=>setPosts(res.data))
        .catch(err=>console.log(err))
    }

    useEffect(()=>{
        getAllPosts();
    },[]);

    const addPost=({title,image,content})=>{
        let newPost={
          id : posts.length + 1,
          title : title,
          image : image,
          content : content
        }
        axios.post("https://noweasydigital-mockserver.onrender.com/posts",newPost)
        .then(res=>getAllPosts())
        .catch(err=>console.log(err))
      }

    const addToFavorite=(post)=>{
        axios.post("https://noweasydigital-mockserver.onrender.com/favourites",post)
        .then(res=>alert("Added to favorites"))
        .catch(err=>console.log(err))

    }
    return(
        <Container >
            <Box variant="h6" marginTop={"8%"} marginBottom={"3%"}>
                <AddPostModal addPost={addPost} />
                </Box>
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