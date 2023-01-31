import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

function App() {

  const [name, setname]= useState("ibtissem");
  const [counter, setcounter]= useState(0);
  const [person, setperson]= useState({
    name:"ibtissem",
    age:38,

  });
  const [students, setstudents]= useState([
    
    {name:"ibtissem",age:38,img:"https://images.pexels.com/photos/669015/pexels-photo-669015.jpeg?cs=srgb&dl=pexels-septimiu-lupea-669015.jpg&fm=jpg"},
    {name:"fedia",age:38,img:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.actu.fr%2Fuploads%2F2020%2F02%2Fchats.jpeg&imgrefurl=https%3A%2F%2Factu.fr%2Fnormandie%2Flisieux_14366%2Flisieux-campagne-sterilisation-chats-errants-hauteville_31438840.html&tbnid=xLcqcRfbUaSpuM&vet=12ahUKEwiywK3Q5tX8AhU7XKQEHaGDChgQMygGegUIARDNAQ..i&docid=JANcEximZKoFHM&w=854&h=569&q=image%20photo%20chat%20%20jpeg&ved=2ahUKEwiywK3Q5tX8AhU7XKQEHaGDChgQMygGegUIARDNAQ"}

  ]);
  const [show, setshow]= useState(false);
  
  return (
    <div >
      <h1>{name}</h1>
      <button onClick={()=>setname("iyed")}>click here to change </button>
      <h3>{counter}</h3>
      <button onClick={()=>setcounter(counter+1)}>click+</button>
      <button onClick={()=>setcounter(counter-1)}>click-</button>
      <h3>{person.name}</h3>
      <input type="text" onChange={(e)=>setperson({...person,name:e.target.value})}/>
      <br/>
     <div className='btdiv' > <button className='bt'  onClick={()=>setshow(!show )  } >click to show </button> </div>
      
      {show ? (<div className="box">
        {students.map((el=> <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.img} style={{ 
      minwidth:"280px",
      maxWidth:"300px" ,
      minHeight:"300px",
      maxHeight:"300pxc" }}/>
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>
         {el.age}
        </Card.Text>
       
      </Card.Body>
    </Card>))}

      </div>) :null}
    </div>
  );
}

export default App;
