import { useState } from "react";


function ListGroup() {
    const items =[
        'NewYork',
        'L.A',
        'Nairobi',
        'Paris'
    ];

//Hook
const [selectedIndex, setSelectedIndex]=useState(-1);


  const getMessage=()=>{
    return     items.length===0? <h2>Sorry! No item found</h2>:null
  }
   //type annotation




  return (
    <>
    <h1>This is List Group component </h1>

    {getMessage()}
    <ul className="list-group">
 
  { items.map((item,index)=>
  <li
  className= {selectedIndex===index?"list-group-item active" :'list-group-item'}
  key={item} 
     onClick={()=>{
        setSelectedIndex(index);
     }}>{item}</li>)}

    </ul>
    </>
  );
}
export default ListGroup;
