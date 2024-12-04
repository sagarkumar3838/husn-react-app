import React, { useEffect } from 'react'

const BasicEffect = () => {
   useEffect(() =>{
    console.log('Basic Component');
   }, [])
  return (
    <div>
       <h1>check the console to see this message.</h1>
    </div>
  )
}

export default BasicEffect
