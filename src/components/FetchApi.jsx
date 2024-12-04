import React, { useEffect, useState } from 'react'

const FetchApi = () => {

    const [data , setData] = useState([]);

    useEffect(()=>{
       async function getData(){
            const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
            const data = await response.json();
            if(data && setData)  setData(data);
        }
        getData()
}, [])


  return (
    <div>
      <ul>{data.map((todo ) =>(
        <section key={todo.id} >
          <li>{todo.title}</li>

        </section>
      ))}</ul>
    </div>
  )
}

export default FetchApi
