import React from 'react';
import {  Routes, Route } from "react-router-dom";
import "../App.css";
import BlogSection from "./BlogSection"
import Home from './HomePage';
import ProjectSection from './ProjectSection';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ReportSection from './ReportSection';
import Reports from './Reports';
import About from './About';
import Contact from './Contact';

function Pages() {

  
    return (
        <>
        <div >
            <Navbar/>
                <Routes>
                    <Route path="/HomePage" element={<Home />}/>
                    <Route path="/BlogSection" element={<BlogSection />}/>
                    <Route path="/ProjectSection" element={<ProjectSection />}/>   
                    <Route path="/ReportSection" element={<ReportSection />}/>  
                    <Route path="/Reports" element={<Reports />}/>  
                    <Route path="/About" element={<About />}/>          
                    <Route path="/Contact" element={<Contact />}/>      
                </Routes> 
            <Footer/>
        </div>
        </>
  );
}

export default Pages;