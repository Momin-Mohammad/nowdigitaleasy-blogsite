import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import { Container } from '@mui/material';

export default function SimplePagination({count,pageChange,page}) {
  return (
    <Container sx={{
        backgroundImage:"linear-gradient(to right, rgb(28, 149, 255),rgb(61, 148, 148),rgb(73, 163, 73))",
        padding:"0.5% 0%",
        width:"50%",
        margin:"auto",
        position:"sticky",
        bottom:"0px"
    }}>
      <Pagination sx={{
        display:"flex",
        justifyContent:"center",
        }} 
        page={page} onChange={(e,value)=>pageChange(value)} count={count} size="large" color="primary" />
    </Container>
  );
}