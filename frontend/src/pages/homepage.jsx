import { Box, Container, Grid, } from "@mui/material";
import { useEffect, useState } from "react";
import axios from 'axios';
import PostCard from "../components/postCard";
import AddPostModal from "../components/addPostModal";
import SimplePagination from "../components/pagination";
import AddToFavButton from "../components/addToFavButton";
import ShowSkeleton from "../components/skeleton";

export default function Homepage({setFavBlogs}){
    const[posts,setPosts] = useState([]);
    const[page,setPage] = useState(1);
    const[count,setCount] = useState(1);
    const[loading,setLoading] = useState(false);

    const getAllPosts = ()=>{
        setLoading(true);
        axios.get(`https://noweasydigital-mockserver.onrender.com/posts?_page=${page}&_limit=10`)
        .then(res=>{
            setPosts(res.data)
            setLoading(false)
        })
        .catch(err=>console.log(err))
    }

    const totalPages = ()=>{
        axios.get("https://noweasydigital-mockserver.onrender.com/posts")
        .then(res=>{
            if(res.data.length%10 === 0){
            setCount(res.data.length/10)
        }else{
        let pages = Math.floor(res.data.length / 10);
        let totalPages = pages+1;
        setCount(totalPages);
        }
        }).catch(err=>console.log(err))
    }

    const getAllFav=()=>{
        axios.get("https://noweasydigital-mockserver.onrender.com/favourites")
        .then(res=>setFavBlogs(res.data.length))
        .catch(err=>console.log(err))
    }

    useEffect(()=>{
        getAllPosts();
    },[page]);

    useEffect(()=>{
        totalPages();
        getAllFav();
    },[]);

    const addPost=({title,image,content,handleClose})=>{
        if(title==="" || image==="" || content===""){
            alert("Please fill all fields");
            return;
        }
        axios.get("https://noweasydigital-mockserver.onrender.com/posts")
        .then(res=>{
            let newPost={
                id : res.data?.length + 1,
                title : title,
                image : image,
                content : content
              }
              axios.post("https://noweasydigital-mockserver.onrender.com/posts",newPost)
              .then(res=>{
                totalPages();
                getAllPosts();
                handleClose();
            })
              .catch(err=>console.log(err))
        }).catch(err=>console.log(err))
        
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
           { loading?
           <ShowSkeleton />
           :
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
                        <AddToFavButton getAllFav={getAllFav} ele={ele} />
                        <PostCard id={ele.id} image={ele.image} title={ele.title} />
                    </Grid>
                    )
                }
            </Grid>}
            <SimplePagination page={page} pageChange={pageChange} count={count}/>
        </Container>
    )
}