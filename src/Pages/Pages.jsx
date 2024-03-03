import React from 'react';
import {  Routes, Route } from "react-router-dom";
import "../App.css";
import BlogSection from "./BlogSection"
import Home from './HomePage';
import ProjectSection from './ProjectSection';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ReportSection from './ReportSection';
import Reports from './Report/Reports';
import About from './About';
import Contact from './Contact';
import CreateReport from "./Report/CreateReport"


function Pages() {

  
    return (
        <>
        <div >
            <Navbar/>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/BlogSection" element={<BlogSection />}/>
                    <Route path="/ProjectSection" element={<ProjectSection />}/>   
                    <Route path="/ReportSection" element={<ReportSection />}/>  
                    <Route path="/Report/Reports" element={<Reports />}/>  
                    <Route path="/Report/CreateReport" element={<CreateReport />}/>  
                    <Route path="/About" element={<About />}/>          
                    <Route path="/Contact" element={<Contact />}/>      
                </Routes> 
            <Footer/>
        </div>
        </>
  );
}

export default Pages;