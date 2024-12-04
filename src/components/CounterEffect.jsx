import React, { useState , useEffect } from 'react'

const CounterEffect = () => {
    const [count , setCount] = useState(0);

    useEffect(()=>{
        document.title = `count: ${count}`
    })
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count + 1)}>increment</button>
    </div>
  )
}

export default CounterEffect
