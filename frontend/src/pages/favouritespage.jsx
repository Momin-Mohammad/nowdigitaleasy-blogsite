import { Box, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import PostCard from "../components/postCard";
import axios from "axios";
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import ShowSkeleton from "../components/skeleton";

export default function Favouritespage({setFavBlogs}){
    const[posts,setPosts] = useState([]);
    const[loading,setLoading] = useState(false);

    const getAllFavoritePosts = ()=>{
        setLoading(true)
        axios.get("https://noweasydigital-mockserver.onrender.com/favourites")
        .then(res=>{
            setPosts(res.data);
            setFavBlogs(res.data.length);
            setLoading(false);
        })
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
        <Box>
       { loading?<ShowSkeleton /> 
       : 
       posts.length?
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
                padding:"1% 0%"
            }}
             color={"red"}>
                <HeartBrokenIcon cursor={"pointer"} onClick={()=>removeFromFavorite(ele.id)}/> 
                </Box>
                <PostCard id={ele.id} image={ele.image} title={ele.title} />
            </Grid>
            )
        }
    </Grid>
    :
    <Box sx={{fontSize:"25px",color:"green",fontWeight:"Bolder"}}>No Blogs Added in favorites</Box>
    }
    </Box>
    )
}