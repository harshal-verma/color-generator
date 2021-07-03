import React, { useState , useEffect} from 'react';
import './App.css';

const SingleColor = ({rgb,index,hexValue,weight}) => {
    const [alert,setAlert] = useState(false);
    const bgc = rgb.join(',');
    const hexColor = '#' + hexValue;
   
    useEffect(() => {
       const timeout = setInterval(() => {
           setAlert(false)
       }, 3000);
       return () => clearTimeout(timeout);
    }, [alert])

    return <article 
        className = {`singleColor ${index > 10 ? 'light-color' : null}`}
        onClick = {() => {
            setAlert(true);
            navigator.clipboard.writeText(hexColor);
        }}
        style={{ 
        backgroundColor: `rgb(${bgc})`
    }}>
      <p 
      style={{ 
        backgroundColor: `rgb(${bgc})`
    }}
      className="percent-value">{weight}%</p>
      <p 
      style={{ 
        backgroundColor: `rgb(${bgc})`
    }}
      className="color-value">{hexColor}</p>
      { alert && <p className="alert"
      style={{ 
        backgroundColor: `rgb(${bgc})`
    }}
      >copied to clipboard</p>}
    </article>
}

export default SingleColor;