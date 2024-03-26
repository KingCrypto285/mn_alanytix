import React, { useState } from 'react';
import styled from "styled-components";
import '../App.css';
import TitleBar from '../Components/TitleBar';
import ContactDetails from '../JS/ContactDetails';

function Contact() {
    const [contactDetail,SetContactDetail] = useState(new ContactDetails());


  
    return (
        <FormDiv>
            <h1>Contact Us:</h1>
            <form action="#">
                <TestDiv>
                <label for="Firstname">First Name:</label>
                <br/>
                <input 
                type="text" 
                name="firstname" 
                required/>
                </TestDiv>
                <TestDiv>
                <label for="Lastname">Last Name:</label>
                <br/>
                <input 
                type="text" 
                name="lastname" 
                required/>
                </TestDiv>
                <TestDiv>
                <label for="Email">Email:</label>
                <br/>
                <input 
                type="text" 
                name="email" 
                required/>
                </TestDiv>
                <TestDiv>
                <label for="Company">Company:</label>
                <br/>
                <input 
                type="text" 
                name="company" 
                required/>
                </TestDiv>
                <TestDiv>                
                <label for="Message">Message:</label>
                <br/>
                <textarea 
                type="text" 
                name="message" 
                required  rows={4} cols={40} />
                </TestDiv>
                <TestDiv>
                <input type='submit' />
                </TestDiv>
            </form>
        </FormDiv>


        // <FormDiv>
        // <FormTitle>Contact Us</FormTitle>
 
        // </FormDiv>
    );
}

const TestDiv = styled.div`
    position:relative;

    input{
        width:80%;
        padding:10px;
        border:none;
        outline:none;
        border-bottom: 2px solid #aaa;
        background-color:#f8f8f8;
        box-shadow:0 2px 5px rgb(0,0,0,0.1);
        transition: all 0.3s ease;
    }

    textarea{
        width:80%;
        padding:10px;
        border:none;
        outline:none;
        border-bottom: 2px solid #aaa;
        background-color:#f8f8f8;
        box-shadow:0 2px 5px rgb(0,0,0,0.1);
        transition: all 0.3s ease;
    }

    button{

    }
`




const Inputted = styled.input`
    &:focus - .underline:before,
    &:valid - .underline:before{
        transform: scale(1);
    }
`

const FormTitle = styled.h1`
text-align: center;
font-size: 41px;
font-weight: 600;
font-family: 'Poppins', sans-serif;
background-color: #E07A5F;
// background: -webkit-linear-gradient(right, #56d8e4, #9f01ea, #56d8e4, #9f01ea);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`


const FormDiv = styled.div`
margin:auto;
max-width: 800px;
background: #fff;
width: 800px;
text-align: center;
padding: 25px 40px 10px 40px;
box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
`


// <FormRow>
// <Inputdata>
// </Inputdata>
// <Inputdata>
// </Inputdata>                
// </FormRow>
// <FormRow>
// <Inputdata>
// </Inputdata>
// <Inputdata>
// </Inputdata>                
// </FormRow>
// <FormRow><Inputdata></Inputdata></FormRow>
// <FormRow>
// <input type="submit" value="Submit"/>
// </FormRow>

// style={{  color:'white',fontSize: '75px',fontFamily: 'Poppins, sans-serif', margin:'auto', display:'flex',flexDirection:'center',
// }}
export default Contact;