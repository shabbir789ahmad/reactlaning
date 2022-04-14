import React from "react";
import Product from './Product';
import Card from './Card';
import Item from './Item';
import Tag from './Tag';
import { useState,useEffect } from "react";
import {liked,product,top,view} from "./Data";
export const Home=()=>{
  const [selected, setSelected]=useState("liked");
  const [data ,setData]=useState([]);
  

  const topCollecttion=[
     
    {
      id:'1',
      top:'Top Collection',
      name:'Womens Wear',
      img:"woman-4702060_960_720.webp"
    },
    {
      id:'1',
      top:'Top Collection',
      name:'Womens Wear',
      img:"woman-4702060_960_720.webp"
    },
    
  ];
  const newetter=[
     
    {
      id:'1',
      h4:'New Best Trend In Town',
      p:'this is the best product, this is the best product i have seen i am fully satisfied with the quality price and plus behavour',
      img:"xproduct_1.png.pagespeed.ic.DvPBG5vxas.webp"
    },
    {
      id:'1',
      h4:'Trend Setter',
      p:'this is the best product, this is the best product i have seen i am fully satisfied with the quality price and plus behavour ',
      img:"xproduct_1.png.pagespeed.ic.DvPBG5vxas.webp"
    },
    {
      id:'1',
      h4:'Trend Setter',
      p:'this is the best product, this is the best product i have seen i am fully satisfied with the quality price and plus behavour ',
      img:"xproduct_1.png.pagespeed.ic.DvPBG5vxas.webp"
    },
  ];
const comment=[


        {
          id:'1',
          tag:"Very Good Product",
          img:'/xproduct_3.png.pagespeed.ic.jCfub0gA7s.webp',
          comment:'this is the best product i have seen i am fully satisfied with the quality price and plus behavour this is the best product i have seen i am fully satisfied with the quality price and plus behavour this is the best product i have seen i am fully satisfied with the quality price and plus behavour'
        },
        {
          id:'1',
          tag:"Realy Liked This Product",
          img:'/xproduct_3.png.pagespeed.ic.jCfub0gA7s.webp',
          comment:'this is the best product i have seen i am fully satisfied with the quality price and plus behavour this is the best product i have seen i am fully satisfied with the quality price and plus behavour this is the best product i have seen i am fully satisfied with the quality price and plus behavour'
        },
        {
          id:'1',
          tag:"Amazing Product",
          img:'/xproduct_3.png.pagespeed.ic.jCfub0gA7s.webp',
          comment:'this is the best product i have seen i am fully satisfied with the quality price and plus behavour this is the best product i have seen i am fully satisfied with the quality price and plus behavour this is the best product i have seen i am fully satisfied with the quality price and plus behavour'
        }

]
  const lists=[
     
    {
      id:'liked',
      list:'Most Liked',
    },
    {
      id:'top',
      list:'Top Rated',
    },
    {
      id:'view',
      list:'Top Viewed',
    },
    {
      id:'laravel',
      list:'Top Viewed',
    }
  ];
  

  useEffect(()=>{
      
    switch(selected){
      case "liked":
        setData(liked);
        break;
       case "top":
         setData(top);
         break; 
         case "view":
         setData(view);
         break;
         case "product":
         setData(product);
         break;
         default:
           setData(liked)
    }
  },[selected]);


return(
<>
  <header className="header">
    
         <div className="header_text_back"></div>
         <div className="header_text">
           <h6>Building a Better </h6>
           <h5>Keep You Handsom </h5>
           <div className="button">
             <button className="btn"> Shop Now</button>
           </div>
          </div>
        <div className="header_image">
          <img src="xslider_1.jpg.pagespeed.ic.V9ovSIY03c.webp" alt="header image" width="100%" height="100%" />
        </div>
     
  </header>
 
  <div className="container p-0 mt-5">
    <div className="row p-0">

      {topCollecttion.map(top=>(
       
       <div className="col-md-6 ">
        <figure className="figure">
          <img src={top.img} alt="image " className="rounded"  width="100%"/>
          <p>{top.top}</p>
          <h6 className="h6">{top.name}</h6>
         
             <button className="btn shop_now_btn"> Shop Now</button>
           
        </figure>
      </div>


      ))}
      
      
    </div>
  </div>

 {/* what people say */}
 <div className="container p-0">
   <Tag tag={"Top Product"} heading={"Our Top Product"} />
   <ul className="list_item_product">
     {lists.map(list=>(
    <Product name={list.list} id={list.id}  active={selected===list.id} setSelected={setSelected} />


     ))};
       
       
     </ul>
   <div className="row">

     

     {data.map(pro=>(
        <Item price={pro.price} name={pro.name} img={pro.img} />

     ))};
     
   </div>
   </div>

   {/* what people say */}
 <div className="container p-0">
 <Tag tag={"News Alert"} heading={"Our Blogs"} />
   

   <div className="items">
     <div className="row">
        {newetter.map(data=>(
            
            <div className="col-md-4">
         <div className="card">
           <div className="card-body">
             <h4>{data.h4}</h4>
             <p>{data.p}</p>
            <img src={data.img} className="rounded border" alt="image" width="100%" ></img>
           </div>
         </div>
       </div>

       ))} 
      
       
     </div>
   </div>
 </div>

  {/* what people say */}
 <div className="container p-0">
 <Tag tag={"Client Reviews"} heading={"What Client Says"} />
   

   <div className="items">
     <div className="row">
       {comment.map(data=>(
            
           <Card tag={data.tag} comment={data.comment} img={data.img} />

       ))}
       
     </div>
   </div>
 </div>
 
</>

);

}