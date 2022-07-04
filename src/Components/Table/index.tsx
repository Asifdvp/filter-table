import {
    Box,
    styled,
    Paper,
    withStyles
  } from "@mui/material";
  import React, { useEffect } from "react";
  import Table from "@mui/material/Table";
  import TableBody from "@mui/material/TableBody";
  import TableCell, { tableCellClasses } from "@mui/material/TableCell";
  import TableContainer from "@mui/material/TableContainer";
  import TableHead from "@mui/material/TableHead";
  import TableRow from "@mui/material/TableRow";
  import Pagination from "@mui/material/Pagination";
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



  const index: React.FC<{ thead: IThead[]; tbody: ITbody[], deleteItem:any}> = ({
    thead,
    tbody,
    deleteItem
  }) => {
  return (
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
          {tbody.map((tr: ITbody) => (
           
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
  <Box  sx={{display:"flex",justifyContent:"flex-end",  transform: 'translate(13%,-100px)',

}}>
        <Pagination
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
        /> 
        </Box>   </div>
  )
}

export default index