import { useEffect, useState } from "react";
import axios from "axios";
import * as React from "react";
import { IThead, ITbody } from "../data";

// interface Table{
//   id:number,
//   name:string
//    }
// interface IThead {

//   "id": number;
//   "name": string;
// }
// interface ITBody {
//   id: number;
//   kys: number;
//   tarix: "string";
//   interval: "string";
//   hekim: "stringf";
//   "O.T.İ": "number";
//   maşınlar: "number";
//   seyyar: "string";
//   barb: "string";
//   uarb: "string";
//   nevroloji: "string";
//   psix: "string";
//   şüa: "string";
//   lab: "string";
// }
// interface Data{
//   tbody:any[],
//   thead:any[]
// }
export interface IThead1 {
  thead: IThead | undefined;
}
export interface ITbody1 {
  thead: ITbody | undefined;
}

const Table: React.FC<{ thead: IThead1 | []; tbody: ITbody1 | []}> = ({
  thead,
  tbody,
}) => {
  return (
    <>
  
      {/* {
       (thead as unknown as any[]).map((item: IThead) => {
          return <h1 key={item.id}>{item.name}</h1>;
        }) */}
{/* } */}
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
};

export default Table;
