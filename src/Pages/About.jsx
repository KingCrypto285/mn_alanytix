import React from 'react';
import styled from "styled-components";
import '..//App.css';
import TitleBar from '../Components/TitleBar';
import personal_image from '../images/personal_image.jpg';
function About() {

  
    return (
        <MainDiv>
            <PersonalDetailbar>
                <PersonalImage src={personal_image} alt='userimage'/>
                <h2>Lachlan Crawford</h2>
                <h3>Site Owner</h3>
            </PersonalDetailbar>
            <MissionStatementDiv>
                <h3>Mission Statement:</h3>
                <p>
                    At the forefront of innovation and driven by our unyielding passion for technology, we are a dynamic IT group dedicated to pioneering 
                    cutting-edge solutions that redefine the boundaries of possibility. With creativity as our compass and expertise as our foundation, 
                    we embark on a relentless quest to design, develop, and deploy transformative technologies that shape the future of our digital landscape.
                </p>
                <p>
                    Committed to pushing the envelope of innovation, we thrive on the challenges inherent in crafting novel solutions to complex problems. 
                    Our team is characterized by a relentless pursuit of excellence, fueled by curiosity and a shared vision to revolutionize the way technology interacts with the world. 
                    Through collaboration, ingenuity, and a tireless dedication to our craft, 
                    we empower organizations and individuals alike to harness the full potential of emerging technologies.
                </p>
                <p>
                    Driven by our unwavering belief in the power of innovation to drive progress, we are more than just a group of IT professionals—we are architects of change, shaping tomorrow's technological landscape today. 
                    With a steadfast commitment to pushing the boundaries of what's possible, we strive to inspire, innovate, and make the impossible, possible. 
                    Join us as we embark on a journey to transform ideas into reality, one breakthrough at a time.
                </p>
            </MissionStatementDiv>
        </MainDiv>
    );
}

const PersonalImage = styled.img`
width: 20%;
height: 100%;
display: block;
margin: auto;
border-radius: 50%;
`
const PersonalDetailbar = styled.div`
width: 60%;
height: 100%;
margin:auto;
flex-direction: column;
justify-content: center;

color:white;
font-family: 'Poppins', sans-serif;
font-size:25px;
text-align:center;
font-family: 'Poppins', sans-serif;


`

const VerticalBar = styled.div`
    background-color:black;
    height:100%;
    width:2px;
`

const MissionStatementDiv = styled.div`
    color:white;
    width:100%;
    font-family: 'Poppins', sans-serif;
    font-size:100%;
    text-align:center;

`
const MainDiv = styled.div`
display:flex;
justify-content:center; 
margin:auto;
width: 100%; 
flex-direction: column;
opacity: 0; /* Start with opacity 0 (fully transparent) */
animation: fadeIn 0.5s ease-in-out forwards;
`

export default About;