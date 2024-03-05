import React, { useState } from "react";
import "../../App.css"
import { PDFDocument } from "pdf-lib";
import { Document, Page, pdfjs } from 'react-pdf';
const Reports = () => {
    const [newPDF,SetnewPDF] = useState('');
   

    // Create an iframe element
    // const iframe = document.createElement('iframe');
    // pdfContainer.appendChild(iframe);
    const go  =async ()=>{

        console.log('create pdf');
        const pdf = await PDFDocument.create();
        const page = pdf.addPage()
        page.drawText('You can create PDFs!')
        const pdfBytes = await pdf.save()
        // Convert the byte array to a Blob
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
        iframe.width = '100%';
        iframe.height = '500px'; // You may adjust the height as needed

        // Append the iframe to the container
        pdfContainer.appendChild(iframe);
        }
        else
        {
            alert('A')
        }
    }





{/* <Document file={{
            data: uint8Arr <----
        }} onLoadSuccess={() => console.log('SUCCESS LOAD')}>
            <Page pageNumber={1} />
        </Document> */}


    return (
        <>
        <button style={{height:'10%',width:'20%'}} onClick={go}>oner</button>
        
        <button style={{height:'10%',width:'20%'}} onClick={go2}>twofer</button>        
        <div>

        <div id="pdfContainer">
        </div>
        </div>
        </>
    );
}
export default Reports;