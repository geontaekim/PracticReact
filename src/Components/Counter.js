import React from 'react';
import { useState } from 'react';


function Counter() {
    const [num,setNum]=useState(0);
    const plusNum=()=>{
        return( setNum(num+1));
    }
    const minNum=()=>{
        return(setNum(num-1));
    }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={plusNum}>+1</button>
      <button onClick={minNum}>-1</button>
    </div>
  );
}

export default Counter;