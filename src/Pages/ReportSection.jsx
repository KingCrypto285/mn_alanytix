import React from 'react';
import '..//App.css';
import styled from "styled-components";
import { Link  } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TitleBar from '../Components/TitleBar';
import MainDescription from '../Components/MainDescription';

function ReportSection () {
    let nav = useNavigate();


    const GoToReports =()=>{
        nav(`/Reports/Reports`);
    }
    
        return (
            <div className='MainContent'>
            <TitleBar title="Reports" type="main" Content={"Generate and investigate"}/>     
            <button onClick={GoToReports}>Go To Reports</button>      
            </div>
        );
    

}

const Buttonbox = styled.div`
    padding:10px;
    margin: 0 auto;

    button{
        padding:5px
    }
`
const TempButton = styled.button`
    
`

export default ReportSection;
