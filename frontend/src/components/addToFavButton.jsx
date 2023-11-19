import { Box, Button } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from "axios";
import { useEffect, useState } from "react";
import Toast from "../components/toast";
import { useParams } from "react-router-dom";

export default function AddToFavButton({getAllFav,ele}){
    const[fav,setFav] = useState(false);
    const {id} = useParams();
    const[showToast,setShowToast] = useState({status:false,severity:"",msg:""})

    const addToFavorite=(post)=>{
        axios.post("https://noweasydigital-mockserver.onrender.com/favourites",post)
        .then(res=>{
            setFav(true);
            getAllFav();
            setShowToast({...showToast,status:true,severity:"success",msg:"Blog added to Favorite"})
        })
        .catch(err=>setShowToast({...showToast,status:true,severity:"error",msg:err}))

    }
    useEffect(()=>{
         let checkPost = id; // If id exists it means the user in on single post page
        axios.get(`https://noweasydigital-mockserver.onrender.com/favourites/${checkPost?checkPost:ele.id}`)
        .then(res=>{
            if(res.data){
                setFav(true);
            }
        }).catch(err=>console.log(err))
    
    },[])
    return(
        <Box 
         sx={{backgroundImage:"linear-gradient(to right, rgb(28, 149, 255),rgb(61, 148, 148),rgb(73, 163, 73))",
         padding:"1% 0%",
         
        }}
        >
            <Button sx={{color:"red"}} 
            disabled={fav===true} 
            cursor={"pointer"} onClick={()=>addToFavorite(ele)}><FavoriteIcon /></Button>
             {showToast.status?<Toast setShowToast={setShowToast} severity={showToast.severity} msg={showToast.msg}/>:null}
        </Box>
    )
}