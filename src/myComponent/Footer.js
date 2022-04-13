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
               </div>
           </div>
           <div className="col-md-2 col-12">
               <div className="footer_list_item  text-center">
                   <h4>Center</h4>
                   <ul className="pl-0">
                       <Link to="#" ><li>Product</li></Link>
                       <Link to="#" ><li>Product</li></Link>
                       <Link to="#" ><li>Product</li></Link>
                       <Link to="#" ><li>Product</li></Link>
                   </ul>
               </div>
           </div>
           
           <div className="col-md-2 col-12">
           <div className="footer_list_item  text-center">
                   <h4>Center</h4>
                   <ul className="pl-0">
                       <Link to="#" ><li>Product</li></Link>
                       <Link to="#" ><li>Product</li></Link>
                       <Link to="#" ><li>Product</li></Link>
                       <Link to="#" ><li>Product</li></Link>
                   </ul>
               </div>
           </div>
           
           <div className="col-md-2 col-12">
           <div className="footer_list_item  text-center">
                   <h4>Center</h4>
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