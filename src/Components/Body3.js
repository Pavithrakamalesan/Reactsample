import React, { useState } from 'react'
import './Body3.css'
const Body3 = () => {

    const [count, setCount]=useState(100)
    const [comment , setComment]=useState(0)
    function incrementLike(){
        setCount(count + 1);
    }

    function incrementcomment(){
            setComment(comment + 1);
    }
  return (
    <div className="body">
        <div className="div">
        <p className='p'>
        VCET Is a co-educational Engineering College started in the year 2001, administered by Vellalar Educational Trust. VET was formed in the year 1969 to provide quality and affordable education - right from primary school to PhD level. The Trust manages 9 other institutions – a State board school, a matriculation school, a CBSE School, an Arts and Science college for Women, a coeducational Arts and Science college, a Pharmacy College, Nursing College and a B.Ed college. 
        </p></div>
        <div className="firstdiv">
    <p> Like:{count}</p>
     <p>coment:{comment}</p></div>
     <button onClick={incrementLike} style={{color:'green'}}>Like</button>
    <button onClick={incrementcomment} style={{color:'green'}}>comment</button>
    </div>
  )
}

export default Body3