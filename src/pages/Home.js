import React, { useState } from 'react'
import { useQuery,useQueries,useIsFetching, useQueryClient, useInfiniteQuery, QueryClient, } from '@tanstack/react-query'
import axios, {isCancel, AxiosError, all} from 'axios';
import { useNavigate } from 'react-router-dom';
/*
/post = ["post"]
/post/2 = ["post",post.id],
/post/1 = ["post",1]
/post/2?hero=spideerman = ["post",2,{hero:"spiderman"}]

*/


const Home = () => {
  const queryClient = useQueryClient();
    const navigate = useNavigate();
    const fetchPosts = async () => {
        const res=  await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
        return res.data;
    }
    const fetchPost = async (id=1) => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return res.data;
    }
const allPosts = useQuery({
        queryFn: fetchPosts,
    queryKey: ['post'],
    initialData:[{id:2,title:'s'}],

        onSuccess: (posts) => {
            posts.forEach(async (e) => {
              queryClient.prefetchQuery({
        queryKey: ['post',e.id],
        queryFn: () => fetchPost(e.id),
        staleTime:5000,
  })
        })
        }
})
    
    console.log(allPosts)
    
    return (
      <div>
          {
              (allPosts.isLoading) ? (<h1>Loading all posts</h1>) : (<>
                  <ul>
                       {
                          allPosts.data.map((e) => <li style={
                            queryClient.getQueryData(["post", e.id])
                        ? {
                            fontWeight: "bold",
                            color: "green"
                          }
                        : {}
                    } key={e.id}><a onClick={() => navigate('/test', {
                              state: {
                                  id:e.id
                              }
                          })}>{e.title}</a></li>)
                }
                  </ul>                
              </>)   
            }
            <button onClick={async () => await queryClient.invalidateQueries({ queryKey: ['post'], type: "active" })}>Invalidate Query</button>  
            <button onClick={async () => await queryClient.refetchQueries({ queryKey: ['post'],exact:true, })}>Refetch Query</button>
    </div>
  )
}

export default Home