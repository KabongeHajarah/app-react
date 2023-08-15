function ListGroup() {
    const items =[
        'NewYork',
        'L.A',
        'Nairobi',
        'Paris'
    ];
   
  return (
    <>
    <h1>This is List Group component </h1>
    <ul className="list-group">
 
  { items.map(item=><li>{item}</li>)}

    </ul>
    </>
  );
}
export default ListGroup;
