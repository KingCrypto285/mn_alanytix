import styled from "styled-components";
import React from 'react';
import '..//App.css';
import { render } from '@testing-library/react';



const TitleBar = ({title,type,onClick }) => {

    return(
      <TitleBarBlock  onClick={onClick } > <h2 className={type}>{title}</h2></TitleBarBlock>
    );

}

const TitleBarBlock = styled.div`
font-family: Georgia;
margin-top: 2rem;

width: 80%;
gap: 16px;
padding-top: 25px;
margin: 0 auto;
border-bottom: 3px solid black; 






.main{
  font-size: 75px;
  text-align:left;
}
.sub{
  font-size: 50px;
  text-align:center;
}

.tiny{
  font-size: 25px;
  text-align:left;
}

`
;




export default TitleBar;