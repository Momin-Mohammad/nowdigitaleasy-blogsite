import './App.css';
import AllRoutes from './AllRoutes/allRoutes';
import Navbar from './components/navbar';
import { Box } from '@mui/material';
import { useState } from 'react';

function App() {
  const[favBlogs,setFavBlogs] = useState(0);

  return (
    <Box className="App">
      <Navbar favBlogs={favBlogs} />
      <Box marginTop={{base:"15%",xs:"18%",md:"10%",lg:"8%"}}>
      <AllRoutes setFavBlogs={setFavBlogs}/>
      </Box>
    </Box>
  );
}

export default App;
