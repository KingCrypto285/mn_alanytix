import React from 'react';
import '..//App.css';
import styled from "styled-components";

const Footer = () => {

    return(
        <BottomBar>
            <h5 style={{margin:'auto'}}>Indatastar</h5>
            <VerticalBreak/>
            <h5 style={{margin:'auto'}}>Indatastar</h5>
            <VerticalBreak/>
            <h5 style={{margin:'auto'}}>Indatastar</h5>
        </BottomBar>
    );
}

const BottomBar = styled.div`
    display: flex;
    flex-direction: row; 
    align-items: center;
    width: 100%;
    height: 5%;
    position: fixed; 
    bottom: 0;
    color: #ffffff;
    background-color: #E07A5F ;
    

`

const VerticalBreak = styled.div`
    margin:auto;
    border-left: 5px solid white; /* Adjust thickness and color as needed */
    height: 50%; 
    padding: 5px;
    margin: 0 10px;
` 

export default Footer;