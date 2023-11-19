import './App.css';
import AllRoutes from './AllRoutes/allRoutes';
import Navbar from './components/navbar';
import { Box } from '@mui/material';

function App() {
  return (
    <Box className="App">
      <Navbar />
      <Box marginTop={{base:"15%",xs:"18%",md:"10%",lg:"8%"}}>
      <AllRoutes />
      </Box>
    </Box>
  );
}

export default App;
