import React, { useEffect, useState } from "react";
import "../../App.css"
import { PDFDocument } from "pdf-lib";
import { Document, Page, pdfjs } from 'react-pdf';
import styled from "styled-components";

const Reports = () => {
    const [newPDF,SetnewPDF] = useState('');
    

    // useEffect(() =>{
    //     StartUpPdf();
    // });

    // Create an iframe element
    // const iframe = document.createElement('iframe');
    // pdfContainer.appendChild(iframe);
    //URL.createObjectURL(newPDF)
    const StartUpPdf  =async ()=>{

        console.log('create pdf');
        const pdf = await PDFDocument.create();
        const page = pdf.addPage()
        const pdfBytes = await pdf.save()
        const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });
        SetnewPDF(pdfBlob)

    }

    function refreshIframe(IF,URLS) {
        // Set the src attribute to refresh the iframe content
        IF.src = URLS;
    }

    const go2 = async () =>{

        if(newPDF)
        {
        alert(newPDF)
        const uint8Array = await newPDF.arrayBuffer();
        const pdfByte = new Uint8Array(uint8Array);
        const pdf2 = await PDFDocument.load(pdfByte)
        const page = pdf2.addPage()
        page.drawText('You can create PDFs!')
        const pdfBytes = await pdf2.save()

        


        const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });

        const pdfDataURL = URL.createObjectURL(pdfBlob);
        // Get reference to the div container
        const pdfContainer = document.getElementById('pdfContainer');

        // Create an iframe element
        const iframe = document.createElement('iframe');

        // Set attributes for the iframe
        iframe.src = pdfDataURL;
        // You may adjust the height as needed

        // Append the iframe to the container
        pdfContainer.appendChild(iframe);
        }
        else
        {
            alert('A')
        }
    }
  


    return (
        <>

        <Toolbox>
                <h1>H</h1>
            <button style={{height:'10%',width:'20%'}} onClick={go2}>twofer</button>     
        </Toolbox>

        </>
    );
}

const Toolbox = styled.div`
background-color:white;
width:90%;
margin: auto;

`

const PDFViewer = styled.iframe`
iframe.width  : 100%;
iframe.height : 500px
`
export default Reports;