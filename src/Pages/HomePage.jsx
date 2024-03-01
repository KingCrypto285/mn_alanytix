import React from 'react';
import BlogSection from './BlogSection';
import '..//App.css';
import TitleBar from '../Components/TitleBar';
import Footer from '../Components/Footer';
import styled, { keyframes } from "styled-components";

 function Home() {
    return(



        <div className='MainContent'>
                <TitleBar title="Analytixs NZ" type="main"/>
                {/* <TitleBar title="Experience Data Analytics in a Whole New Light!" type="sub"/> */}
        </div>



    )
};
const MainContent = styled.div`
display: flex;
height: 90vh;
flex-direction: column;
text-align: left;
justify-content: center;


`;

const colorTransition = keyframes`
  0% {
    background-color: red;
  }
  50% {
    background-color: blue;
  }
  100% {
    background-color: red;
  }
`;

 export default Home;