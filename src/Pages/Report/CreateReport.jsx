import {React,useState} from "react";
import "../../App.css";
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
import { Page, Text, View, Document, StyleSheet  } from '@react-pdf/renderer';
import styled from "styled-components";

function CreateReport() {

    const [PDF,SetPDF] = useState(null)





    return(
            <div>
            </div>
    )


}

export default CreateReport;



{/* <input type="file"/>
<button onClick={NewDoc}>New</button>
<div style={{ width: '100%', height: '500px' }}>
<Document>
<Page size="A4" style={styles.page}>
<View style={styles.section}>
<Text>Section #1</Text>
</View>
<View style={styles.section}>
<Text>Section #2</Text>
</View>
</Page>
</Document>
{!PDF && <p>No Preview available.</p>}
</div> */}