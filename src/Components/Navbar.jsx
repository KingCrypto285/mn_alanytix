import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import BlogSection from "../Pages/BlogSection";
import "../App.css";

const Navbar = () => {

    const [DroppedDown,SetDroppedDown] = useState(false);

    const toggleDropdown = () => {
        SetDroppedDown(!DroppedDown);
      };
    


    return (
        <nav className="navbar">
        <div className="container">
          <div>
          <h3>Analytixs</h3>
          </div>
          <div className="nav-elements">
            
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/BlogSection" component={BlogSection}>Blog</NavLink>
              </li>
              <li>
                <NavLink to="/ProjectSection">Projects</NavLink>
              </li>
              <li>
                <NavLink to="/Reports">Reports</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
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
