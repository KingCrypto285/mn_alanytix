import React, { useState } from "react";
import "../../App.css"
import { PDFDocument } from "pdf-lib";
import { Document, Page, pdfjs } from 'react-pdf';
const Reports = () => {
    const [newPDF,SetnewPDF] = useState(null);

    const go  =async ()=>{
        console.log('create pdf');
        const pdf = await PDFDocument.create();
        const page = pdf.addPage()
        page.drawText('You can create PDFs!')
        const pdfBytes = await pdf.save()
        console.log(pdfBytes)
        
    }

{/* <Document file={{
            data: uint8Arr <----
        }} onLoadSuccess={() => console.log('SUCCESS LOAD')}>
            <Page pageNumber={1} />
        </Document> */}


    return (
        <div>
        <button style={{height:'100%',width:'100%'}} onClick={go}></button>
        </div>
    );
}
export default Reports;