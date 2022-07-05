import Best from './best';
import axios from 'axios';
import React from 'react'
import Post from './post';
import { useState,useEffect } from 'react'
const Pag = () => {
   const  [data,setData] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(4);
    useEffect(()=>{
        const getData = async() =>{
            const res = await axios.get("http://localhost:3000/data");
            const data = res.data;
            setData(data.tbody);
        };
        getData();
    },[]);
    //sonnuncu post
const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;

const currentPosts = data.slice(indexOfFirstPost,indexOfLastPost);
const paginate = (pageNumber:any) => setCurrentPage(pageNumber);
  return (
    
    <div>
        <Post posts={currentPosts}/>
 
    </div>
  )
}

export default Pag