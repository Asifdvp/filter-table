import { Pagination, Box, Link } from "@mui/material";
import axios from "axios";
import React, { FC, useEffect, useState,useRef } from "react";
import "./index.scss";
const Best: FC<any> = () => {
  const leftR=useRef(null);
const cur = useRef(null);
  const [data, setData] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  const [dis,setDisabled] = useState(true)
  const [disR,setDisabledR] = useState(false)
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:3000/data");
      const data = res.data;
      setData(data.tbody);
    };
    getData();
  }, []);
  //sonnuncu post
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
  const pageNumbers = [];
  const MaxNumber =  Math.ceil(data.length / postsPerPage);
  for (let i = 1; i <= Math.ceil(data.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = async (pageNumber:any) =>{
  setCurrentPage(pageNumber);
  if(pageNumber ===1){
  setDisabled(true)
}
else{
  setDisabled(false)
}
}
   const left =   () =>{
   setCurrentPage(currentPage-1)
   }
   const right = () =>{
    setCurrentPage(currentPage +1 )    
    }
   useEffect(()=>{
    if(currentPage ===1 ){
     setDisabled(true)
}
if(currentPage< MaxNumber){
  setDisabledR(false)
}
if(currentPage === MaxNumber){
  setDisabledR(true)
 }

   },[currentPage])

 
  return (
    <div>
      <Box sx={{}}>
        <ul className="pagination">
          <button disabled={dis} ref={leftR} className="page-item left"  onClick={left}>Li</button>
          {pageNumbers.map((num: number) => (
              <li  className="page-item" key={num} onClick={(e)=>{paginate(num)}}>{num}</li>          
          ))}
          <button  disabled={disR} className="page-item right" onClick={right}>Right</button>
        </ul>
      </Box>
      <Box>
<ul>
  {currentPosts.map((item:any)=>(
     <li key={item.id}>{item.id}</li>
  ))} 
</ul>
        </Box>
    </div>
  );
};

export default Best;
