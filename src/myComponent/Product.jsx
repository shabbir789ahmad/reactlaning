export default function Product({name,active,setSelected,id}){

    return (

        <>
        <li className={active? "product active":"product"} onClick={()=>setSelected(id)}> {name}</li>
        </>
    );
}