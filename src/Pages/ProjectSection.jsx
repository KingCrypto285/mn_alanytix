import React, { useState } from 'react';
import '..//App.css';
import TitleBar from '../Components/TitleBar';
import Projects from '../JS/Projects';





const ProjectSection = () => {


    const [ShowInProgress,SetShowInProgress] = useState(false)
    const [ShowCurrent,SetShowCurrent] = useState(false)
    const [ShowCompleted,SetShowCompleted] = useState(false)
    const [InprogressArray,SetInProgressArray] = useState([]);
    const [CurrentArray,SetCurrentArray] = useState([]);
    const [CompletedArray,SetCompletedArray] = useState([]);



    const ShowAllInProgress = () =>{
        if(InprogressArray.length > 0)
        {
            SetShowInProgress(!ShowInProgress);
        }
    }

    const ShowAllCurrent = () =>{
        if(CurrentArray.length > 0)
        {
            SetShowCurrent(!ShowCurrent);
        }
    }

    const ShowAllCompleted = () =>{
        if(CompletedArray.length > 0)
        {
            SetShowCompleted(!ShowCompleted);
        }
    }




    return (
        <>
            <div className='MainContent'>
                <TitleBar title="Projects" type="main" Content={"See what's being cooked up next"}/>

                {/* <TitleBar title="In Progress" type="tiny" onClick={ShowAllInProgress}/>
                {ShowInProgress &&
                        InprogressArray.map((project,inx) =>(
                            <h2 key={inx}>{project}</h2>
                        ))}
                <div>
                    <TitleBar title="Current" type="tiny" onClick={ShowAllCurrent}/>
                    {ShowCurrent &&
                        CurrentArray.map((project,inx) =>(
                            <h2 key={inx}>{project}</h2>
                        ))}
                    <TitleBar title="Completed" type="tiny" onClick={ShowAllCompleted}/>
                    {ShowCompleted  &&
                        CompletedArray.map((project,inx) =>(
                            <h2 key={inx}>{project}</h2>
                        ))}
                </div> */}
            </div>
            
        </>
    );

}
export default ProjectSection;