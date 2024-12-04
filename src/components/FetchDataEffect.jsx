import React, { useEffect, useState } from 'react'

const FetchDataEffect = () => {

    const [post , setPost] = useState([]);

    useEffect(()=>{
        const fetchData = async () =>{
            const response = await fetch ("https://jsonplaceholder.typicode.com/posts")
            const data = await response.json();
            setPost(data);
        }
        fetchData();
    }, [])
  return (
    <div>
      <h1>Fetch the post :</h1>
      <h2>{post.length > 0 ? <span>{post[0].title}</span>: <span>Loading....</span>}</h2>
    </div>
  )
}

export default FetchDataEffect
