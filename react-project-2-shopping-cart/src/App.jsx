import { useState } from 'react'
import PropTypes from 'prop-types';

import './App.css'

       const Userdata = [
        {
        name: "Fancy Product",
        price: "$40.00 - $80.00",
       },
        {
          name: "Special Item",
        price: " before:$20.00, now:$18.00",
      },
      {
        name:"Sale Item",
        price: "just: $25.00"
      },
      {
        name: "Popular Item",
        price:"$40.00"
      },
      {
        name: "Fancy Product",
        price:"$120.00 - $280.00",
        
      },
      {
        name: "Popular Item",
      
        price:"$40.00",
      },

      
    ];
          
  
function Card(props) {
  const[count, Setcount] = useState(0);


  const handleClick = () => Setcount(count+1)

  
 
  return (
    <>
    

    <div className='card-container'>
  
    <h3>{props.name}</h3>
    <h3>{props.price}</h3>
    
    <button className='btn' onClick={handleClick}>Add to cart: {count} </button>
    {/* <button onClick={Click}>-{Less}</button> */}

    </div>
     
    </>
  );
}

function App() {
  return(
    <>
    
    
    {Userdata .map((catalogue, index)=> (<Card key={index} name={catalogue.name} price={catalogue.price}/>))}
      {/* <Card name="Fancy Product" price="$40.00 - $80.00" /> */}
     
    </>
  )
}


export default App

Card.propTypes= {
  name:PropTypes.string.isRequired,
  price:PropTypes.string.isRequired,
};