import React from "react";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom'
import Search from "./components/Search";
import NavbarSearch from "./components/NavbarSearch";
import {AuthProvider} from "./context/AuthContext";
import Images from "./components/Images";
import News from "./components/News";
import Video from "./components/Video";
import Books from "./components/Books";
import Maps from "./components/Maps";
import Shoping from "./components/Shoping";
import Flights from "./components/Flights";
import Finance from "./components/Finance";

function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <AuthProvider>
      <Routers>
        <Routes>
          <Route path="/" element={<><Navbar key="NavbarHome"/><Home key="home" /></>} />
          <Route path="/search/"  element={<><NavbarSearch type='search' /><Search type="search" key="all"/></>}/>
            <Route path="/search/news"  element={<><NavbarSearch type="news"/><News type="news" key="news" /></>} />
            <Route path="/search/images" element={<><NavbarSearch type="image" /><Images type="image" key="images" /></>} />
            <Route path="/search/books"  element={<><NavbarSearch type="books"/><Books  /></>} />
            <Route path="/search/videos"   element={<><NavbarSearch type="video" /><Video type="video" key="videos" /></>} />
            <Route path="/search/maps"  element={<><NavbarSearch /><Maps /></>} />
            <Route path="/search/shopping"  element={<><NavbarSearch /><Shoping /></>} />
            <Route path="/search/flights" element={<><NavbarSearch /><Flights /></>} />
            <Route path="/search/finance"   element={<><NavbarSearch /><Finance /></>} />
        </Routes>
        <Footer />
      </Routers>
      </AuthProvider>
    </div>
  );
}

export default App;
