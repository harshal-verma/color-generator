import React, { useState , useEffect } from 'react';
import SingleColor from './SingleColor';
import Values from 'values.js';
import './App.css';

function App() {
  const [color , setColor] = useState();
  const [error , setError] = useState(false);
  const [list , setList] = useState(new Values('#10b981').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try{
      let colors = new Values(color).all(10);
      setList(colors);
    }catch(error){
      setError(true);
      console.log(error);
    }
  }

  return <React.Fragment>
    <section className="container">
      <h2>Color Generator</h2>
      <form onSubmit={handleSubmit}>
         <input 
         className={`${error ? 'error' : null}`}
         placeholder="#10B981"
         type="text" 
         value={color} onChange={(e) => setColor(e.target.value)}/>
         <button type="submit">Submit</button>
      </form>
    </section>
    <section className="singleColor-container">
    {list.map((color,index) => {
        return <SingleColor key ={index} index = {index} {...color} hexValue = {color.hex}/>
    })}
    </section>
  </React.Fragment>;
}

export default App;
