import ListGroup from "./components/ListGroup"
// import Alert from "./components/alert";
import Button from "./components/button";
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
    <>
  <div>
    <ListGroup items={items} heading="Cities" onSelection={handleSelection}/> 
   
    </div>
<div >
{/* <Alert>
 Hello World
</Alert> */}

<Button></Button>
</div>
</>
    );
  }
  export  default App