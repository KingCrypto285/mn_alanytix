import React, { Component, useEffect, useState } from "react"
import {Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import Draggable from 'react-draggable';
import { PDFDocument,StandardFonts  } from "pdf-lib";
import { FaAd,FaCog } from "react-icons/fa";
import styled from "styled-components";
import DraggableBox from "../../Components/DraggableBox";


const Create_Report =()=>{
    const [PDF,SetPDF] = useState('')
    const [DesignArray,setDesignArray] = useState([]);

    const GenerateBox = ()=>{
        alert('Works');
    }

    useEffect(() =>{
        SetUpPDFOnLoad();
        //LoadPDF();
    },[])

    async function SetUpPDFOnLoad()
    {
        const NewPDF = await PDFDocument.create()
        const Page = NewPDF.addPage();
        //const font = await NewPDF.embedFont(StandardFonts.Helvetica);
        const Text = 'You can create PDFs!';
        Page.drawText(Text)
        const Fontsize = 24

        const PDFBytes = await NewPDF.save();
        SetTOUrl(PDFBytes);
    }

    async function LoadPDF()
    {
        const PDF_LOAD = await PDFDocument.load(PDF);
        // const viewerPrefs = PDF_LOAD.catalog.getOrCreateViewerPreferences();
        // viewerPrefs.setDisplayDocTitle(true);
        // viewerPrefs.setFitWindow(true);


    }


    const SetTOUrl = (PDFInput) =>
    {
        const BLOB = new Blob([PDFInput], { type: 'application/pdf' });
        const PDF_URL = URL.createObjectURL(BLOB);
        SetPDF(PDF_URL)
    }


        return(
            <MainDiv>
                <div>
                    <Sidebar style={{height:'90vh',width:'5vh', backgroundColor:'white'}}>
                        <Menu>
                        <UnderlinedSub title="Settings" icon={<FaCog />}>
                        <MenuItem onClick={GenerateBox}>Text</MenuItem>
                        <MenuItem>Image</MenuItem>
                        <MenuItem>Theme</MenuItem>
                        <MenuItem>Table</MenuItem>
                        </UnderlinedSub>
                        </Menu>
                    </Sidebar>
                </div>
                <DivObj>
                    <button onClick={LoadPDF}>Go</button>

                    <iframe src={PDF} style={{height:'100%',width:'100%'}}></iframe>

                </DivObj>
            </MainDiv>
        );
    

}


const UnderlinedSub = styled(SubMenu)`
border-bottom: 2px solid #E07A5F;
width: 80%;
` 


const MainDiv = styled.div`
    display:flex;
`

const DivObj = styled.div`

margin:auto;
height:90vh;
width:90vh;
`

// iv style={{height:'100vh',display:'flex'}}
export default Create_Report


// <div style={{display:'flex'}}>
// <Sidebar style={{height:'90vh',padding:'5px',width:'10%'}}>
//     <Menu>
//         <MenuItem>Add</MenuItem>
//         <MenuItem>Other</MenuItem>
//     </Menu>
// </Sidebar>
// <DivObj>
// <iframe src={PDF} style={{height:'100%',width:'90%'}}></iframe>
// </DivObj>
// </div>