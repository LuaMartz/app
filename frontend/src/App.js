import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./i18n";
import Navigation from "./components/Navigation";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { Toaster } from "./components/ui/sonner";

function App() {
  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';
  }, []);

  return (
    <div className="App bg-black min-h-screen">
      <BrowserRouter>
        <CustomCursor />
        <Navigation />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
