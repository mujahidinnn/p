import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./components/Blog";
import Bot from "./components/Bot";
import Certificate from "./components/Certificate";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Bot />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/cer" element={<Certificate />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
