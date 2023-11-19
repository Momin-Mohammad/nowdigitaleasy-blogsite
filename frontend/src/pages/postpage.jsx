import { Container, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddToFavButton from "../components/addToFavButton";

export default function Postpage({setFavBlogs}){
    const {id} = useParams();
    const[post,setPost] = useState([]);

    const getAllFav=()=>{
        axios.get("https://noweasydigital-mockserver.onrender.com/favourites")
        .then(res=>setFavBlogs(res.data.length))
        .catch(err=>console.log(err))
    }

    useEffect(()=>{
        axios.get(`https://noweasydigital-mockserver.onrender.com/posts?id=${id}`)
        .then(res=>setPost(res.data))
        .catch(err=>console.log(err))

        getAllFav();
    },[]);

    return(
        <Container sx={{
            width:"80%",
            borderLeft:"2px solid rgb(28, 149, 255)",
            borderRight:"2px solid rgb(73, 163, 73)",
            }}>
            <AddToFavButton getAllFav={getAllFav} ele={post[0]} />
            <img width={"70%"} src={post[0]?.image} alt="post image" />
            <Typography gutterBottom variant="h4" component="div">
            {post[0]?.title}
          </Typography>
            <Typography sx={{
                textAlign:"justify",
                fontSize : "large",
                lineHeight:2,
            }} variant="body2">
                {post[0]?.content}
            </Typography>
        </Container>
    )
}