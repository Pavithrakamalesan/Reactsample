import React, { useState } from 'react'
import './Body2.css'
const Body2 = () => {

    const [count, setCount]=useState(0)

    function increment(){
        setCount(count + 1);
    }
  return (
    <div className="div">
        <p>
            count:{count}
        </p>
        <button onClick={increment} style={{color:'yellow'}}>Increment</button>
    </div>
  )
}

export default Body2