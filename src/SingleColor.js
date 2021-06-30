import React, { useState , useEffect} from 'react';
import './App.css';

const SingleColor = ({rgb,index,hexValue,weight}) => {
    const [alert,setAlert] = useState(false);
    // console.log(hexValue);
    const bgc = rgb.join(',');
    const hexColor = '#' + hexValue;
    console.log(bgc);
   
    useEffect(() => {
       const timeout = setInterval(() => {
           setAlert(false)
       }, 3000);
       return () => clearTimeout(timeout);
    }, [alert])

    return <article 
        onClick = {() => {
            setAlert(true);
            navigator.clipboard.writeText(hexColor);
        }}
        style={{ 
        backgroundColor: `rgb(${bgc})`,
        height: "100px"
    }}>
      <p>{weight}</p>
      <p>{hexColor}</p>
      { alert && <p>copied to clipboard</p>}
    </article>
}

export default SingleColor;