import React from 'react';
import '..//App.css';
import TitleBar from '../Components/TitleBar';
import Footer from '../Components/Footer';
import styled, { keyframes } from "styled-components";
import BlogSection from './BlogSection';
import ReportSection from './ReportSection';
import ProjectSection from './ProjectSection';
import About from './About';
import Contact from './Contact';

 function Home() {
    return(

        <div className='MainContent'>
                <TitleBar title="IndataStar" type="main" Content={"Dive into a new way to view data"}/>
                {/* <BlogSection/>
                <ProjectSection/> */}
        </div>

    )
};
 export default Home;