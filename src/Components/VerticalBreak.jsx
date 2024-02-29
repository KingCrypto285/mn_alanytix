import React from 'react';
import '..//App.css';
import styled from "styled-components";


const VerticalBreak = () => {

    return(

        <Break/>
    );

}


const Break = styled.div`

    border-left: 5px solid black; /* Adjust thickness and color as needed */
    height: 90%; 
    padding: 5px;

` 

export default VerticalBreak;

