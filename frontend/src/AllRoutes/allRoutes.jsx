import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/homepage";
import Favouritespage from "../pages/favouritespage";
import Postpage from "../pages/postpage";

export default function AllRoutes({setFavBlogs}){
    return(
        <Routes>
            <Route path="/" element={<Homepage setFavBlogs={setFavBlogs} />} />
            <Route path="/favourites" element={<Favouritespage setFavBlogs={setFavBlogs} />} />
            <Route path="/post/:id" element={<Postpage setFavBlogs={setFavBlogs} />} />
        </Routes>
    )
}