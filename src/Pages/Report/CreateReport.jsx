import {React,useState} from "react";
import "../../App.css";
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
import {  Text, View, Document, StyleSheet  } from '@react-pdf/renderer';
import styled from "styled-components";
import * as pdfjs from 'pdfjs-dist';
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";




const CreateReport = () => {

    const [pdf, setPdf] = useState(null);

    return (
        <>
        <h1>Create your own report...</h1>
        <MenuBox>
            
        </MenuBox>
        </>
    );
  };
  

const MenuBox = styled.div`
background-color: #ffffff;
width:90%;
height:50%;
margin: auto;
border-radius: 5px;
h1{
    font-family:  Poppins, sans-serif;
    color: #E07A5F;
    font-size: 50px;
}
`


export default CreateReport;



