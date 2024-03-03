import React, { useState } from "react";
import { NavLink,Link  } from "react-router-dom";
import BlogSection from "../Pages/BlogSection";
import "../App.css";
import VerticalBreak from "./VerticalBreak";
import Home from '../Pages/HomePage';
import ReportSection from "../Pages/ReportSection";
import ProjectSection from "../Pages/ProjectSection";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import logo from "../Images/logo.png"

const Navbar = () => {

    const [DroppedDown,SetDroppedDown] = useState(false);

    const toggleDropdown = () => {
        SetDroppedDown(!DroppedDown);
      };
    


    return (
        <nav className="navbar">
        <div className="container">
          <div>
          <Link to="/" className="heading-link">IndataStar</Link>
          </div>
          <div className="nav-elements">
            <ul>
              <li>
                <NavLink to="/" component={Home}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/BlogSection" component={BlogSection}>Blog</NavLink>
              </li>
              <li>
                <NavLink to="/ProjectSection" component={ProjectSection}>Projects</NavLink>
              </li>
              <li>
                <NavLink to="/ReportSection" component={ReportSection}>Reports</NavLink>
              </li>
              <li>
                <NavLink to="/About" component={About}>About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
  
  export default Navbar
