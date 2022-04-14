import React from "react";
import {Link } from 'react-router-dom';

export const Footer=()=>{
    return (
  <>
  <div className="container-fluid mt-5 footer_back">
       <div className="row mt-4">
           <div className="col-md-3 col-12">
               <div className="web_name">
                 <Link to="about" className="text-light nav-logo">mrDesign</Link>
                 <p>This is the best product i have seen i am fully satisfied with the quality price and plus behavour this is the best product </p>
                 <div className="social_icon">
                     <Link to="/" ><i className="fas fa-facebook"></i></Link>
                     <Link to="/" ><i className="fas fa-twitter"></i></Link>
                     <Link to="/" ><i className="fas fa-heart"></i></Link>
                     <Link to="/" ><i className="fas fa-heart"></i></Link>
                 </div>
               </div>
           </div>
           <div className="col-md-2 col-12">
           <div className="footer_list_item  ">
                   <h4>Support Links </h4>
                   <ul className="pl-0">
                       <Link to="#" ><li>Home</li></Link>
                       <Link to="#" ><li>About Us</li></Link>
                       <Link to="#" ><li>Contact Us</li></Link>
                       <Link to="#" ><li>Term & Conditions</li></Link>
                   </ul>
               </div>
           </div>

           <div className="col-md-2 col-12">
               <div className="footer_list_item  ">
                   <h4>Category</h4>
                   <ul className="pl-0">
                       <Link to="#" ><li>New Product</li></Link>
                       <Link to="#" ><li>Winter Special</li></Link>
                       <Link to="#" ><li>Summer Special</li></Link>
                       <Link to="#" ><li>By Designer</li></Link>
                   </ul>
               </div>
           </div>
           
           <div className="col-md-2 col-12">
           <div className="footer_list_item  ">
                   <h4>Ideas</h4>
                   <ul className="pl-0">
                       <Link to="#" ><li>Product</li></Link>
                       <Link to="#" ><li>Product</li></Link>
                       <Link to="#" ><li>Product</li></Link>
                       <Link to="#" ><li>Product</li></Link>
                   </ul>
               </div>
           </div>
           <div className="col-md-3 col-12">
           <div className="web_name">
                 <Link to="about" className="text-light nav-logo">mrDesign</Link>
                 <p>This is the best product i have seen i am fully satisfied with the quality price and plus behavour this is the best product </p>
               </div>
           </div>
       </div>
       </div>
    </>
    )
}