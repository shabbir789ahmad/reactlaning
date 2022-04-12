import React from "react";
import Product from './Product';
import { useState,useEffect } from "react";
import {liked,product,top,view} from "./Data";
export const Home=()=>{
  const [selected, setSelected]=useState("liked");
  const [data ,setData]=useState([]);
  const samllImage=[

    {
      id:'1',
      img:'/xproduct_1.png.pagespeed.ic.DvPBG5vxas.webp',
    },{
      id:'2',
      img:'/xproduct_10.png.pagespeed.ic.69mYA3FDZH.webp',
    },{
      id:'3',
      img:'/xproduct_3.png.pagespeed.ic.jCfub0gA7s.webp',
    }
  ];


  const sizes=[
     
    {
      id:'sm',
      size:'S',
      name:'Large',
    },
    {
      id:'md',
      size:'M',
      name:'Medium',
    },
    {
      id:'lg',
      size:'L',
      name:'Small',
    }
  ];

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
  <div className="container-fluid">
    <h5 className="classic">We Offer You The Best We Have</h5>
  </div>
  <div className="container p-0 mt-5">
    <div className="row p-0">
      <div className="col-md-6 p-0">
        <figure className="figure">
          <img src="banner-1.jpg" alt="image " />
          <h6 className="h6">Men Wears</h6>
        </figure>
      </div>
      <div className="col-md-6">
        <h4>Choose Your Desired Product</h4>
        <div className="row mt-4">
          {samllImage.map(img=>(

               <div className="col-md-4 border border-secondary">
                <img src={img.img} alt="image " className="image ml-2 "  />
               </div>
          ))}
          
        </div>
        <div className="price mt-3">
          <p className="p1">$12</p>
          <p className="p2">$12</p>
          <p className="p3">1% off</p>
        </div>
        
        <div className="row">
          {sizes.map(size=>(

             <div className="col-md-3 mt-4">
              <div className="sizes shadow" >
               <h6>{size.size}</h6>
               <p>{size.name}</p>
             </div>
            </div>
          ))}
        
        </div>
        <button className="btn btn-lg mt-4 button_style">Add to Cart</button>
      </div>
    </div>
  </div>

 {/* what people say */}
 <div className="container p-0">
   <div className="title_review">
     <p>Client Reviews</p>
     <h6>Our Top Product</h6>
   </div>
   <ul className="list_item_product">
     {lists.map(list=>(
    <Product name={list.list} id={list.id}  active={selected===list.id} setSelected={setSelected} />


     ))};
       
       
     </ul>
   <div className="row">

     

     {data.map(pro=>(
        <div className="col-md-3">

        <div className="card shadow card_zoom mt-4">
           <div className="card-body card_style p-0">
             <div className="product_image">
               <img src={pro.img} width="100%" height="300rem" />
               <p className="sale">Sale</p>
               <div className="cart_wish">
               <p className="cart"><i className="fas fa-shopping-cart"></i></p>
               <p className="wish" ><i className="fas fa-heart"></i></p>
               </div>
             </div>
             <div className="product_tile">
             <h6>{pro.name}</h6>
             <h6>{pro.price}</h6>
             </div>
          </div>
        </div>
        </div>

     ))};
     
   </div>
   </div>

  {/* what people say */}
 <div className="container p-0">
   <div className="title_review">
     <p>Client Reviews</p>
     <h6>What Client Says About Us</h6>
   </div>

   <div className="items">
     <div className="row">
       <div className="col-md-4 p-0">
         <div className="card shadow">
           <div className="card-body card_style">
             <i className="fa-thin fa-comment"></i>
             <h4>very good product amazing</h4>
             <p>this is the best product i have seen i am fully satisfied with the quality price and plus behavour this is the best product i have seen i am fully satisfied with the quality price and plus behavour this is the best product i have seen i am fully satisfied with the quality price and plus behavour </p>
            <div className="user_detail">
              <img src="logo192.png" />
              <div className="name_city">
              <h6>Shabbir Ahmad</h6>
              <p>Lahore, Pakistan</p>
              </div>
            </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>
 
</>

);

}