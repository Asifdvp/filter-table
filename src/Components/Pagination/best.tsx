import { Pagination ,Box} from '@mui/material'
import axios from 'axios';
import React, { FC, useEffect, useState } from 'react'
const Best:FC<any> = () => {
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
// const paginate = (pageNumber:any) => setCurrentPage(pageNumber);
    let pageNumber = Math.ceil(Number(data.length)/Number(postsPerPage));
//     console.log(pageNumber);
let paginate = (pageNumber:any) =>{
    setCurrentPage(pageNumber.target.textContent)
//   console.log(pageNumber.target.textContent)
//   if(pageNumber.target)
// console.log(pageNumber.target.parentElement.parentElement)
// console.log(pageNumber.target)

const currentLi =  pageNumber.target.parentElement.parentElement;
const leftBtn = pageNumber.target.parentElement.parentElement.parentElement.children[0];
// console.log(leftBtn);

const ul = pageNumber.target.parentElement.parentElement.parentElement.children
const lastLi = pageNumber.target.parentElement.parentElement.parentElement.children.length - 1;
const rightBtn = ul[lastLi]
//    if(pageNumber.target.  === leftBtn){
//     console.log("asif")
//    }
// console.log(pageNumber.target.parentElement.children[0].textContent)
// console.log(leftBtn);
// console.log(currentLi)
}

  return (
    <div>


<Box  sx={{

}}>
        <Pagination
        // onClick={()=>paginate()}
        onClick={paginate}
          count={pageNumber}
          shape="rounded"
          color="primary"
          sx={{
            
      width:"500px",
            ".MuiButtonBase-root,.MuiPaginationItem-sizeMedium ,.MuiPaginationItem-outlined ,.MuiPaginationItem-rounded, .MuiPaginationItem-outlinedPrimary, .Mui-selected, .MuiPaginationItem-page":
              {
                backgroundColor: "white",
                color: "#00b3fc",
                borderColor: "#00b3fc",
                border:"1px solid #00b3fc",
                "&:hover": {
                  backgroundColor: "#00b3fc",
                  color: "white",
                },
                "&:focus": {
                  backgroundColor: "#00b3fc",
                  color: "white",
                },
              },
          }}
        /> 
        </Box>


    </div>
  )
}

export default Best