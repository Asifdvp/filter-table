import { Pagination, Box } from "@mui/material";
import axios from "axios";
import React, { FC, useEffect, useState, useRef } from "react";
import "./index.scss";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';import {
  styled,
  Paper,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { IThead, ITbody } from "../../data";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: "#00b3fc",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  transition: "all 0.5s",
  "&:nth-of-type(odd)": {
    backgroundColor: "#F4FAFF",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
  "&:hover": {
    backgroundColor: "#00b3fc",
  },
}));


const Best: React.FC<{ thead: IThead[]; tbody: ITbody[], deleteItem:any}> = ({thead,tbody,deleteItem}) => {











  
  const leftR = useRef(null);
  const cur = useRef(null);
  const [data, setData] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  const [dis, setDisabled] = useState(true);
  const [disR, setDisabledR] = useState(false);
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
  const MaxNumber = Math.ceil(data.length / postsPerPage);
  for (let i = 1; i <= Math.ceil(data.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = async (pageNumber: any) => {
    setCurrentPage(pageNumber);
    if (pageNumber === 1) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };
  const left = () => {
    setCurrentPage(currentPage - 1);
  };
  const right = () => {
    setCurrentPage(currentPage + 1);
  };
  useEffect(() => {
    if (currentPage === 1) {
      setDisabled(true);
    }
    if (currentPage !== 1) {
      setDisabled(false);
    }
    if (currentPage < MaxNumber) {
      setDisabledR(false);
    }
    if (currentPage === MaxNumber) {
      setDisabledR(true);
    }
  }, [currentPage]);

  return (
    <div>
   






      <div>  <Box
    sx={{
      overflow: "scroll",
    }}
  >
    <TableContainer
    className="a"
      component={Paper}
      sx={{
        padding: "30px 20px 90px 20px",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "space-between",
        justifyContent: "space-between",
        borderRadius: "20px"
    
 
      }}
    >
      <Table  aria-label="simple table"  >
        <TableHead>
          <TableRow>
            {thead.map((th: IThead) => (
              <StyledTableCell
                key={th.id}
                sx={{ border: "0" }}
                align="right"
              >
                {th.name}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {currentPosts.map((tr: ITbody) => (
           
            <StyledTableRow
              key={tr.id}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                border: "0"
              }}
            >
              <TableCell sx={{width:"100px !important"}} >{tr.kys}</TableCell>
              <TableCell>{tr.tarix}</TableCell>
              <TableCell >
                {tr.interval}
              </TableCell>
              <TableCell>{tr.hekim}</TableCell>
              <TableCell>{tr.OTİ}</TableCell>
              <TableCell>{tr.maşınlar}</TableCell>
              <TableCell>{tr.seyyar}</TableCell>
              <TableCell>{tr.barb}</TableCell>
              <TableCell>{tr.uarb}</TableCell>
              <TableCell>{tr.nevroloji}</TableCell>
              <TableCell  sx={{ width: "6% !important" }}>{tr.psix}</TableCell>
              <TableCell>{tr.şüa}</TableCell>
              <TableCell>{tr.lab}</TableCell>
              <TableCell>{tr.cerrah}</TableCell>
              <TableCell>{tr.cerrah1}</TableCell>
              <TableCell>{tr.cerrah2}</TableCell>
              <TableCell>{tr.cerrah3}</TableCell>
              <TableCell>{tr.cerrah4}</TableCell>
              <TableCell >{ <DeleteOutlineOutlinedIcon sx={{color:"red",cursor:"pointer " }} onClick={()=>{deleteItem(tr.id)}} />   }</TableCell>
            </StyledTableRow>
          ))}
        </TableBody>

    
      </Table>     
    </TableContainer>
  </Box>
  <Box  sx={{display:"flex",justifyContent:"flex-end",  transform: 'translate(-2%,-100px)',

}}>



<Box sx={{}}>
        <ul className="pagination">
          <button
            disabled={dis}
            ref={leftR}
            className="page-item left"
            onClick={left}
          
          >
            <  ArrowBackIosNewIcon  sx={{width:"15px",height:"15px"}}/>
          </button>
          {pageNumbers.map((num: number) => (
            <li
              className="page-item"
              key={num}
              onClick={(e) => {
                paginate(num);
              }}
            >
              {num}
            </li>
          ))}
          <button disabled={disR} className="page-item left"   onClick={right}>
         < ArrowForwardIosIcon  sx={{width:"15px",height:"15px"}}/>
          </button>
        </ul>
      </Box>

        {/* <Pagination
          count={5}
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
        />  */}
        </Box>   </div>






















    </div>
  );
};

export default Best;
