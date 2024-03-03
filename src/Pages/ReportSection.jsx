import React from 'react';
import '..//App.css';
import styled from "styled-components";
import { Link  } from "react-router-dom";
import TitleBar from '../Components/TitleBar';
import MainDescription from '../Components/MainDescription';
import { useNavigate } from "react-router-dom";

function  ReportSection ()  {
    let Nav = useNavigate();

    const RouteChange = () =>{
        Nav('../Report/CreateReport');
    }



        return (
            <div className='MainContent'>
            <TitleBar title="Reports" type="main" Content={"Generate and investigate"}/>           
            <Buttonbox>
                <TempButton onClick={RouteChange}>Create Report</TempButton>
                <TempButton onClick={RouteChange}>Upload Reports</TempButton>
                <TempButton onClick={RouteChange}>Review Report Directory</TempButton>
            </Buttonbox>
            </div>
        );
    

}

const Buttonbox = styled.div`
width: 60%;
gap: 16px;
height: auto;
padding-top: 25px;
margin: 0 auto;
justify-content:center;
align-items: center; 

`


// background-color: #D46A47;
const TempButton = styled.button`
padding: 10px 20px; /* Adjust padding for better button appearance */
font-size: 30px; /* Decrease font size for better fit */
font-family:  Poppins, sans-serif;
background-color: white;
width:30%;
height:100%;
margin:0 8px;
color: #E07A5F;
border: none;
cursor: pointer;
transition: background-color 0.3s ease;

&:hover {
  background-color: #D46A47;
  color: white;
}
`

export default ReportSection;
