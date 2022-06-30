import { useEffect, useState } from "react";
import axios from "axios";
import * as React from "react";

import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// interface Table{
//   id:number,
//   name:string
//    }
interface IThead {
  id: number;
  name: string;
}
interface ITBody {
  id: number;
  kys: number;
  tarix: "string";
  interval: "string";
  hekim: "stringf";
  "O.T.İ": "number";
  maşınlar: "number";
  seyyar: "string";
  barb: "string";
  uarb: "string";
  nevroloji: "string";
  psix: "string";
  şüa: "string";
  lab: "string";
}
// interface Data{
//   tbody:any[],
//   thead:any[]
// }

function Table({thead,tbody}:any) {
  return (
    <>
    {
      thead ?  thead.map((item: IThead) => (
        <h1 key={item.id}>{item.name}</h1>
      ))
      : 
      null
    }
    </>
    //    <TableContainer component={Paper}>
    //       <Table sx={{ minWidth: 650 }} aria-label="simple table">
    //         <TableHead>
    //           <TableRow>
    //             {data.thead.map(item=>(
    //  <TableCell key={item.id}>{item.name}</TableCell>
    //             ))}
    //           </TableRow>
    //         </TableHead>

    //       </Table>
    //     </TableContainer>
  );
}

export default Table;
