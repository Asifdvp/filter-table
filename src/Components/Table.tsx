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
  tbody: ITbody | undefined;
}

const Table: React.FC<{ thead: IThead1 | []; tbody: ITbody1 | []}> = ({
  thead,
  tbody,
}) => {
  return (
    <>
  
      {
       (thead as unknown as any[]).map((item: IThead) => {
          return <h1 key={item.id}>{item.name}</h1>;
        }) }
{
       (tbody as unknown as any[]).map((item: ITbody) => {
          return <h1 key={item.id}>{item.kys}</h1>;
        }) 
 }
    </>

  );
};

export default Table;
