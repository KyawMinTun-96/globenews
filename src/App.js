import React from "react";
import {Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import Error from './components/Error';


function App() {


  return (
    <div className="app">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<Error/>} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
