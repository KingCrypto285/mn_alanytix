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

    async function LoadPDF()
    {
        const PDF_LOAD = await PDFDocument.load(PDF);
    }

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

    const SetTOUrl = (PDFInput) =>
    {
        const BLOB = new Blob([PDFInput], { type: 'application/pdf' });
        const PDF_URL = URL.createObjectURL(BLOB);
        SetPDF(PDF_URL)
    }

    async function GetUnitArray() 
    {
        const resp = await fetch(PDF);
        const Arraybuffer = await resp.arrayBuffer();
        const unit = new Uint8Array(Arraybuffer);
        return unit;
    }

    async function LoadPDF()
    {
        const resp = await fetch(PDF);
        const Arraybuffer = await resp.arrayBuffer();
        const unit = new Uint8Array(Arraybuffer);
        const PDF_LOAD = await PDFDocument.load(unit);
        const pges = PDF_LOAD.getPages()
        const First = pges[0]
        const txt = 'Here';
        First.drawText(txt,{x:50,y:50})

        const PDFBytes = await PDF_LOAD.save();
        SetTOUrl(PDFBytes);
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


        // const viewerPrefs = PDF_LOAD.catalog.getOrCreateViewerPreferences();
        // viewerPrefs.setDisplayDocTitle(true);
        // viewerPrefs.setFitWindow(true);


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