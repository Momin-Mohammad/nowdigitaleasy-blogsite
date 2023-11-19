import { Box, Container, Grid, } from "@mui/material";
import { useEffect, useState } from "react";
import axios from 'axios';
import PostCard from "../components/postCard";
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddPostModal from "../components/addPostModal";
import SimplePagination from "../components/pagination";

export default function Homepage(){
    const[posts,setPosts] = useState([]);
    const[page,setPage] = useState(1);
    const[count,setCount] = useState(1);

    const getAllPosts = ()=>{
        axios.get(`https://noweasydigital-mockserver.onrender.com/posts?_page=${page}&_limit=4`)
        .then(res=>setPosts(res.data))
        .catch(err=>console.log(err))
    }

    const totalPages = ()=>{
        axios.get("https://noweasydigital-mockserver.onrender.com/posts")
        .then(res=>{
            if(res.data.length%4 === 0){
            setCount(res.data.length%4)
        }else{
        let pages = Math.floor(res.data.length / 4);
        let totalPages = pages+1;
        setCount(totalPages);
        }
        }).catch(err=>console.log(err))
    }

    useEffect(()=>{
        getAllPosts();
    },[page]);

    useEffect(()=>{
        totalPages();
    },[]);

    const addPost=({title,image,content})=>{
        let newPost={
          id : posts.length + 1,
          title : title,
          image : image,
          content : content
        }
        axios.post("https://noweasydigital-mockserver.onrender.com/posts",newPost)
        .then(res=>totalPages())
        .catch(err=>console.log(err))
      }

    const addToFavorite=(post)=>{
        axios.post("https://noweasydigital-mockserver.onrender.com/favourites",post)
        .then(res=>alert("Added to favorites"))
        .catch(err=>console.log(err))

    }

    const pageChange=(page)=>{
        setPage(page)
    }
    return(
        <Container >
            <hr/>
            <Box variant="h6" margin={"3%"}>
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
                        <Box 
                        sx={{backgroundImage:"linear-gradient(to right, rgb(28, 149, 255),rgb(61, 148, 148),rgb(73, 163, 73))",
                        padding:"1% 0%"}}
                        onClick={()=>addToFavorite(ele)} color={"red"}><FavoriteIcon /> </Box>
                        <PostCard id={ele.id} image={ele.image} title={ele.title} />
                    </Grid>
                    )
                }
            </Grid>
            <SimplePagination page={page} pageChange={pageChange} count={count}/>
        </Container>
    )
}