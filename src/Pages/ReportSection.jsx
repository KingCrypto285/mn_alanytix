import React from 'react';
import '..//App.css';
import styled from "styled-components";
import TitleBar from '../Components/TitleBar';
import MainDescription from '../Components/MainDescription';
import { Link,useNavigate  } from "react-router-dom";

const ReportSection =()=> {
    const Nav = useNavigate();


    const GoToReports =()=>{
        Nav(`/Reports/Create_Report`);
    }

        return (
            <div className='MainContent'>
            <TitleBar title="Reports" type="main" Content={"Generate and investigate"}/>   
            <button onClick={GoToReports}>Create New report</button>        
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
