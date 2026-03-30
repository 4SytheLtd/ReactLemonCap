import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import Menu from "./components/Menu/Menu";
import Reservations from "./components/Reservations/Reservations";

import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from "react";
export default function App() {
    return (
        <>
        
        <Router>
                <Header />
                
                <Routes>
                    <Route path="/" element={<HomePage/>}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/menu" element={<Menu />}></Route>
                    <Route path="/reservations" element={<Reservations />}></Route>

            </Routes>
                <Footer />
        </Router>
            
            
            
        </>
    );
}
