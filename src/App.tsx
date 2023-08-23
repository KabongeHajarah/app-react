  import ListGroup from "./components/ListGroup"


  function App (){
    let items =[
      'NewYork',
      'L.A',
      'Nairobi',
      'Paris'
  ];

  return (
  <div><ListGroup items={items} heading="Cities"/> </div>

    );
  }
  export  default App