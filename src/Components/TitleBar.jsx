import styled from "styled-components";
import React from 'react';
import '..//App.css';
import { render } from '@testing-library/react';



const TitleBar = ({title,type}) => {
    render();
    return(
        <TitleBarBlock>
            <h2 className={type}>{title}</h2>
        </TitleBarBlock>
    );

}

const TitleBarBlock = styled.div`
font-family: Poppins, sans-serif;
margin-top: 2rem;

width: 80%;
gap: 16px;
padding-top: 25px;
margin: 0 auto;

h2 {
  text-align: center; 
  border-bottom: 3px solid black; 
  padding-bottom: 8px;
  width: 50%; 
  margin: 0 auto; 
}

.main{
  font-size: 75px;
}
.sub{
  font-size: 50px;
}
`;


export default TitleBar;