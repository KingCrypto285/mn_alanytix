import React from 'react';
import BlogSection from './BlogSection';
import '..//App.css';
import TitleBar from '../Components/TitleBar';
import Footer from '../Components/Footer';
import styled from "styled-components";

 function Home() {
    return(



        <MainContent>
                <TitleBar title="Analytixs NZ" type="main"/>
                {/* <TitleBar title="Experience Data Analytics in a Whole New Light!" type="sub"/> */}
        </MainContent>



    )
};
const MainContent = styled.div`
display: flex;
height: 90vh;
flex-direction: column;
text-align: left;
justify-content: center;

`;



 export default Home;