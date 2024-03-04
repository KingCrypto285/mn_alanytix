import React from 'react';
import BlogSection from './BlogSection';
import '..//App.css';
import TitleBar from '../Components/TitleBar';
import Footer from '../Components/Footer';
import styled, { keyframes } from "styled-components";

 function Home() {
    return(


        <div className='MainContent'>
                <TitleBar title="IndataStar" type="main" Content={"Dive into a new way to view data"}/>
        </div>

    )
};
 export default Home;