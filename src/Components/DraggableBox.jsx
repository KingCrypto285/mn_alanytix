import React from "react";
import Draggable from "react-draggable";
import styled from "styled-components";

const DraggableBox = ()=> {


    return(
        <Draggable>
            <BOX>
                <HANDLE>
                    
                </HANDLE>
            </BOX>
        </Draggable>
    );

}

const BOX = styled.div`
position: absolute;
width: 200px;
height: 200px;
border: 2px dotted #000;
cursor: move;
`

const HANDLE = styled.div`
height: 20px; /* You can adjust the size of the handle */
background-color: #ccc;
cursor: move;
`
export default DraggableBox;