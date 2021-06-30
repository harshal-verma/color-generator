import React, { useState , useEffect } from 'react';
import Values from 'values.js';
import './App.css';

function App() {
  const [color , setColor] = useState("");
  const [error , setError] = useState(false);
  const [list , setList] = useState([]);

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
      <h2>color generator</h2>
      <form onSubmit={handleSubmit}>
         <input type="text" value={color} onChange={(e) => setColor(e.target.value)}/>
      </form>
      <button type="submit">generate</button>
    </section>
    <section>
    </section>
  </React.Fragment>;
}

export default App;
