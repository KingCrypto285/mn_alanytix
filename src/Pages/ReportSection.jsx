import React from 'react';
import '..//App.css';
import styled from "styled-components";
import { Link  } from "react-router-dom";
import TitleBar from '../Components/TitleBar';
import MainDescription from '../Components/MainDescription';

class ReportSection extends React.Component {



    GoToReports =()=>{
        this.props.history.push(`/Reports`);
    }
    render(){
        return (
            <div className='MainContent'>
            <TitleBar title="Reports" type="main" Content={"Generate and investigate"}/>           
            <div>
                <h1>hello</h1>
            <Link to="/Reports"></Link>
            </div>
            </div>
        );
    }

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
