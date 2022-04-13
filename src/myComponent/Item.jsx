export default function Item({price,name,img}){

    return (

        <>
            <div className="col-md-3">

<div className="card shadow card_zoom mt-4">
   <div className="card-body card_style p-0">
     <div className="product_image">
       <img src={img} width="100%" height="300rem" />
       <p className="sale">Sale</p>
       <div className="cart_wish">
       <p className="cart"><i className="fas fa-shopping-cart"></i></p>
       <p className="wish" ><i className="fas fa-heart"></i></p>
       </div>
     </div>
     <div className="product_tile">
     <h6>{name}</h6>
     <h6>{price}</h6>
     </div>
  </div>
</div>
</div>
        </>
    );
}