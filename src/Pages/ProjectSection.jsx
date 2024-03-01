import React, { useState } from 'react';
import '..//App.css';
import TitleBar from '../Components/TitleBar';
import Projects from '../JS/Projects';

const ProjectSection = () => {


    const [ShowInProgress,SetShowInProgress] = useState(false)
    const [ShowCurrent,SetShowCurrent] = useState(false)
    const [ShowCompleted,SetShowCompleted] = useState(false)
    const [InprogressArray,SetInProgressArray] = useState([]);
    const [CurrenArray,SetCurrentArray] = useState([]);
    const [CompletedArray,SetCompletedArray] = useState([]);





    const ShowAllInProgress = () =>{
        SetShowInProgress(!ShowInProgress);
    }

    const ShowAllCurrent = () =>{
        SetShowCurrent(!ShowCurrent);
    }

    const ShowAllCompleted = () =>{
        SetShowCompleted(!ShowCompleted);
    }


    return (
        <>
            <div>
                <TitleBar title="In Progress" type="tiny" onClick={ShowAllInProgress}/>
                {ShowInProgress &&<h2>Here</h2>}
                <div style={{paddingLeft:'20px'}}>
                    <TitleBar title="Current" type="tiny" onClick={ShowAllCurrent}/>
                    {ShowCurrent &&<h2>Here</h2>}
                    <TitleBar title="Completed" type="tiny" onClick={ShowAllCompleted}/>
                    {ShowCompleted &&<h2>Here</h2>}
                </div>
            </div>
            
        </>
    );

}
export default ProjectSection;