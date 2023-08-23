  import ListGroup from "./components/ListGroup"


  function App (){
    let items =[
      'NewYork',
      'L.A',
      'Nairobi',
      'Paris'
  ];
  const handleSelection=(item:string)=>{
    console.log(item);
    
  }
  return (
  <div><ListGroup items={items} heading="Cities" onSelection={handleSelection}/> </div>

    );
  }
  export  default App