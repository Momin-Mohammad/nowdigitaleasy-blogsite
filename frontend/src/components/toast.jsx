import * as React from 'react';
import Alert from '@mui/material/Alert';

export default function Toast({setShowToast,msg,severity}) {

    setTimeout(()=>{
        setShowToast(false)
    },3000)

  return (
    <Alert variant="filled" severity={severity}>
      {msg}
    </Alert>
  );
}