import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/homepage";
import Favouritespage from "../pages/favouritespage";
import Postpage from "../pages/postpage";

export default function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/favourites" element={<Favouritespage />} />
            <Route path="/post/:id" element={<Postpage />} />
        </Routes>
    )
}