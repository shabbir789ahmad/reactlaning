import React from "react";
import { useNavigate } from "react-router";
export default function About()
{
    let navigate=useNavigate();   
    return (
     
        <div className="banner">
          <p>gfgf</p>
          <button className="btn btn-danger" onClick={()=>{ navigate("/") ; }}>back to home</button>
        </div>
   
    );
}