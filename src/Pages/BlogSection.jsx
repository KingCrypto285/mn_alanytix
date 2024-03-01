import React from 'react';
import '..//App.css';
import TitleBar from '../Components/TitleBar';
import Footer from '../Components/Footer';


const BlogSection = () => {

    return (
        <div className='MainContent'>
            <TitleBar title="Blog" type="main" Content={"Dig into what we are talking about!!"}/>

        </div>
    );

}
export default BlogSection;