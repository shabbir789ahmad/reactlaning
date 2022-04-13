export default function Item({tag,heading}){

    return (

        <>
           <div className="title_review">
     <p>{tag}</p>
     <h6>{heading}</h6>
   </div>
        </>
    );
}