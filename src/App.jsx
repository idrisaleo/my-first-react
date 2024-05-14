import Home from "./Home"
import Browse from "./Browse";
import Featured from "./Featured"
import Location from "./Location"
import Insight from "./Insight"
import Important from "./Important"
import Footer from "./Footer"
import PassGen from "./PassGen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState} from "react"




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/featured" element={<Featured />} />
          <Route path="/insight" element={<Insight />} />
          <Route path="/location" element={<Location />} />
          <Route path="/important" element={<Important />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/passgen" element={<PassGen/>} />
                  
        
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App
