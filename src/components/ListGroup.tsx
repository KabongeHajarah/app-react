    import { useState } from "react";
    interface Props{
        items:string[];
        heading:string;

        //(item:string)=>void
        onSelection:(item:string)=>void;
    }

    function ListGroup({items, heading, onSelection}:Props) {
       

    //Hook
    const [selectedIndex, setSelectedIndex]=useState(-1);


    const getMessage=()=>{
        return     items.length===0? <h2>Sorry! No item found</h2>:null
    }
    //type annotation


    return (
        <>
        <h1>{heading} </h1>

        {getMessage()}
        <ul className="list-group">
    
    { items.map((item,index)=>
    <li
    className= {selectedIndex===index?"list-group-item active" :'list-group-item'}
    key={item} 
        onClick={()=>{
            setSelectedIndex(index);
            onSelection(item)
        }}>{item}</li>)}

        </ul>
        </>
    );
    }
    export default ListGroup;
