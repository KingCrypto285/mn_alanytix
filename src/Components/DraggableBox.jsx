import React, { useState } from "react";
import Draggable from "react-draggable";
import styled from "styled-components";

const DraggableBox = ()=> {
    const [Size,SetSize] = useState({width:500,height:500});

    const HandleResize = (e,direction,ref,delta) =>{
        SetSize({
            width: Size.width + delta.width,
            height: Size.height + delta.height
        })
    }

    return(
        <Draggable>
            <BOX
                size={Size}
                minConstraints={[100,100]}
                onResize={HandleResize}
                draggableOpts={{grid:[25,25]}}
            >
                    
                <HANDLE/>
            </BOX>
        </Draggable>
    );

}

const BOX = styled.div`
position: absolute;
border: 2px dotted #000;
height: ${(props) => props.size.height}px;
width: ${(props) => props.size.width}px;
cursor: move;
`

const HANDLE = styled.div`
height: 20px; /* You can adjust the size of the handle */
background-color: #ccc;
cursor: move;
`
export default DraggableBox;