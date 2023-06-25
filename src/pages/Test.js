import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from "react-router-dom";

const Test = () => {
  const location = useLocation();
    const navigate = useNavigate();
    const fetchPost = async () => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${location.state.id}`);
        return res.data;
    }
    const post = useQuery({
        queryFn: fetchPost,
        queryKey:['post',location.state.id]
    })
  return (
      <div>
          <h1>Test page { location.state.id}</h1>
          <p>{
              (post.isLoading) ? (<h1>POST LOADING</h1>) : (<p>{ post.data.title}</p>)
          }</p>
          <button onClick={()=>navigate('/')}>Go back</button>
    </div>
  )
}

export default Test