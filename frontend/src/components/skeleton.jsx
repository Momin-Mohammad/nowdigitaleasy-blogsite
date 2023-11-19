import { Grid, Skeleton } from "@mui/material";

export default function ShowSkeleton(){
    return(
        <Grid container>
            <Grid item  
            margin={"auto"}
            xs={10} 
            md={5}
            lg={5}>
                <Skeleton height={"50vh"}/>
                <Skeleton sx={{margin:"auto",width:"60%",marginTop:"-20px"}} />
                <Skeleton sx={{margin:"auto",width:"60%"}} />
            </Grid>

            <Grid item  
            margin={"auto"}
            xs={10} 
            md={5}
            lg={5}>
                <Skeleton height={"50vh"}/>
                <Skeleton sx={{margin:"auto",width:"60%"}}/>
                <Skeleton sx={{margin:"auto",width:"60%"}}/>
            </Grid>

            <Grid item  
            margin={"auto"}
            xs={10} 
            md={5}
            lg={5}>
                <Skeleton height={"50vh"}/>
                <Skeleton sx={{margin:"auto",width:"60%"}}/>
                <Skeleton sx={{margin:"auto",width:"60%"}}/>
            </Grid>

            <Grid item  
            margin={"auto"}
            xs={10} 
            md={5}
            lg={5}>
                <Skeleton height={"50vh"}/>
                <Skeleton sx={{margin:"auto",width:"60%"}}/>
                <Skeleton sx={{margin:"auto",width:"60%"}}/>
            </Grid>
        </Grid>
    )
}