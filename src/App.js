import React, { Component } from 'react';
import { BrowserRouter} from "react-router-dom";
import Pages from './Pages/Pages';
import "./App.css";
import Navbar from './Components/Navbar';
import Home from './Pages/HomePage';



class App extends Component {
  
  render() {
    return(
      <>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
      </>
  );}
}

export default App;


