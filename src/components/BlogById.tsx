import  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

type  Blog  = {
    id: number;
    title: string;
    completed: boolean;
}

export default function BlogById() {
    const {id}= useParams();
    const [blog , setBlog]= useState<Blog>();
    const auth_token = '123tyuhjtyfuimi9iygu456dfghjk67njk';
    useEffect(()=> {
        fetch(`/api/blogs/:id` +id , {
            
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${auth_token}`,
        },
    } )
     .then(res=> res.json())
     .then((json)=> setBlog(json))
     .finally(()=> console.log('API finally fetched'))
    } , [id])


    // if (!blog) {
    //     return <div>Loading...</div>;
    //   }


  return (
    <div>
      <h1>Blog List</h1>
      <p>Blog Id: {id}</p>
      <p>Food Name :{blog?.id}</p>
    </div>
  )
}
