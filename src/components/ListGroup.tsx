function ListGroup() {
    const items =[
        'NewYork',
        'L.A',
        'Nairobi',
        'Paris'
    ];
  const getMessage=()=>{
    return     items.length===0? <h2>Sorry! No item found</h2>:null
  }
   
  return (
    <>
    <h1>This is List Group component </h1>

    {getMessage()}
    <ul className="list-group">
 
  { items.map(item=><li key={item}>{item}</li>)}

    </ul>
    </>
  );
}
export default ListGroup;
