import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./components/Blog";
import Bot from "./components/Bot";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Bot />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project/>} />
          <Route path="/blog" element={ <Blog/>} />
        </Routes>

        <Footer />
        
      </BrowserRouter>
    </div>
  );
};

export default App;
