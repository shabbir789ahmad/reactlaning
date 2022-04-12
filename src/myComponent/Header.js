import React from "react";
import {Link } from 'react-router-dom';
import List from "./List";

export default function Header(props){

    return (
        <>
        
         <header className="h">
           <nav className="top-nav navbar">
             <Link to="#" className="nav-logo">mrDesign</Link>
             <div className="seach-bar">
               <input type="search" name="search" className="search" />
               <button className="btn-search btn ">Search</button>
             </div>
             <div className="icons">
               <i className="fas fa-cart">cart</i>
             </div>
           </nav>
           <hr className=" mt-4 mb-0"/>
        <nav className="navbar bottom-nav pt-0">
            <Link to="#" className="nav-logo2">Studio</Link>
            <ul className="nav-menu">
                <li className="nav-item">
                    <Link to="#" className="nav-link active">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="#" className="nav-link">New</Link>
                </li>
                <li className="nav-item">
                    <Link to="#" className="nav-link">Winter</Link>
                </li>
                <li className="nav-item">
                    <Link to="#" className="nav-link">Summer</Link>
                </li>
                <li className="nav-item">
                    <Link to="#" className="nav-link">Men Special</Link>
                </li>
                <li className="nav-item">
                    <Link to="#" className="nav-link">Top Selling</Link>
                </li>
            </ul>
            <div className="designer_name">
            <Link to="#" className="nav-logo3 ">By Shabbir</Link>
            <div className="hamburger">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            </div>
        </nav>
       </header>
          
        </>
    );
   
}