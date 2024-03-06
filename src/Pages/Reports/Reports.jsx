import React, { Component, useEffect, useState } from "react";
import "../../App.css"
import { PDFDocument } from "pdf-lib";
import { Document, Page, pdfjs } from 'react-pdf';
import styled from "styled-components";
import pdf from "../../JS/pdf";

class Reports extends Component {

    constructor(props)
    {
        super(props);
        this.PDF_URL = null;
        this.Image_url = null;
    }


    componentDidMount() {
        this.onload();
    }
    // const [newPDF,SetnewPDF] = useState(null);


    async onload() {
        const PDF = new pdf();
        await PDF.setupPDF();
        const IFrame = document.getElementById('PDF_viewer');
        const urls = URL.createObjectURL(PDF.created_pdf);
        IFrame.src=urls;
    }


    // Create an iframe element
    // const iframe = document.createElement('iframe');
    // pdfContainer.appendChild(iframe);
    //URL.createObjectURL(newPDF)
    // const StartUpPdf  =async ()=>{

    //     console.log('create pdf');
    //     const pdf = await PDFDocument.create();
    //     const page = pdf.addPage()
    //     const pdfBytes = await pdf.save()
    //     const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });
    //     SetnewPDF(pdfBlob)

    // }

    // function refreshIframe(IF,URLS) {
    //     // Set the src attribute to refresh the iframe content
    //     IF.src = URLS;
    // }

    // const go2 = async () =>{

    //     if(newPDF)
    //     {
    //     alert(newPDF)
    //     const uint8Array = await newPDF.arrayBuffer();
    //     const pdfByte = new Uint8Array(uint8Array);
    //     const pdf2 = await PDFDocument.load(pdfByte)
    //     const page = pdf2.addPage()
    //     page.drawText('You can create PDFs!')
    //     const pdfBytes = await pdf2.save()

        


    //     const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });

    //     const pdfDataURL = URL.createObjectURL(pdfBlob);
    //     // Get reference to the div container
    //     const pdfContainer = document.getElementById('pdfContainer');

    //     // Create an iframe element
    //     const iframe = document.createElement('iframe');

    //     // Set attributes for the iframe
    //     iframe.src = pdfDataURL;
    //     // You may adjust the height as needed

    //     // Append the iframe to the container
    //     pdfContainer.appendChild(iframe);
    //     }
    //     else
    //     {
    //         alert('A')
    //     }
    // }
  

    render(){

    
    return (
        <>
        <Toolbox>

            <Section>
                <h1>Text</h1>
                <button>Add Big Text</button>
                <button>Add Image</button>
                <input type="file" accept="image/png, image/jpeg"/>
            </Section>
            <Section>
                <h1>Image</h1>
            </Section>
            <Section>
                <h1>Hello</h1>
            </Section>
            {/* <button style={{height:'10%',width:'20%'}} onClick={go2}>twofer</button>      */}
        </Toolbox>
        <PDFDiv>
            <PDFIFrame id='PDF_viewer'></PDFIFrame>
        </PDFDiv>
        </>
    );
    }

}

const PDFIFrame  = styled.iframe`
margin: auto;
display: flex;
height: 100%;
width: 85%;
`
const PDFDiv = styled.div`
padding-top:5px;
height: 90vh;
`


const Toolbox = styled.div`
background-color:white;
width:90%;
height:15%;
margin: auto;
border-radius:10px;
display: flex;
flex-direction: row; 
`
const Section = styled.div`
padding:3px;
height:90%; 
width:20%;
background-color:red
border-left: 3px solid black;
border-right: 3px solid black;
`


export default Reports;