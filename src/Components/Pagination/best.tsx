import { Pagination ,Box, Link} from '@mui/material'
import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import './index.scss'
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
    let pageNumber = Math.ceil(Number(data.length)/Number(postsPerPage));
//     console.log(pageNumber);
let paginate = (pageNumber:any) =>{
    setCurrentPage(pageNumber.target.textContent)

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
const pageNumbers = [];
for (let i = 1; i <= Math.ceil(data.length / postsPerPage); i++) {
  pageNumbers.push(i);
}
console.log(pageNumbers)
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
              {/* <ul className='pagination' >
                <li>left</li>
          {pageNumbers.map((number:any) => (
            <li key={number} className='page-item'>
              <Link onClick={(e) => {
                // console.log(e.target.textContent)
paginate(number)
              }   }    to="/best" className='page-link' >
                {number}
              </Link>
            </li>
            <li>next</li>
          ))}
        </ul> */}
        <ul className='pagination'>
          <li className='page-item'>Li</li>
          {pageNumbers.map((num:number)=>(
            <Link  key={num}  onClick = {(e)=>{console.log('dsfdsf')}}>
   <li className="page-item">{num}</li>
            </Link>
         
          ))}
          <li className='page-item'>Right</li>
        </ul>
        </Box>
        {/* <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      /> */}

    </div>
  )
}

export default Best