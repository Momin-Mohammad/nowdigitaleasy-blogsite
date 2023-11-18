import { Container, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Postpage(){
    const {id} = useParams();
    const[post,setPost] = useState([]);

    useEffect(()=>{
        axios.get(`https://noweasydigital-mockserver.onrender.com/posts?id=${id}`)
        .then(res=>setPost(res.data))
        .catch(err=>console.log(err))
    },[]);

    return(
        <Container>
            <img src={post[0]?.image} alt="post image" />
            <Typography gutterBottom variant="h5" component="div">
            {post[0]?.title}
          </Typography>
            <Typography variant="body2">
                {post[0]?.content}
            </Typography>
        </Container>
    )
}