import React from 'react';
import {  Routes, Route } from "react-router-dom";
import "../App.css";
import BlogSection from "./BlogSection"
import Home from './HomePage';
import ProjectSection from './ProjectSection';
import Navbar from '../Components/Navbar';

function Pages() {

  
    return (
        <>
        <div >
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/BlogSection" element={<BlogSection />}/>
            <Route path="/ProjectSection" element={<ProjectSection />}/>

        </Routes>
        </div>
        </>
  );
}

export default Pages;