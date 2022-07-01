import * as React from "react";
import { IThead, ITbody } from "../data";

const Table:React.FC<{ thead: IThead[], tbody: ITbody[] }> = ({
  thead,
  tbody,
}) => {
  return (
    <>
      {thead.map((item: IThead) => {
        return <h1 key={item.id}>{item.name}</h1>;
      })}
      {tbody.map((item: ITbody) => {
        return <h1 key={item.id}>{item.kys}</h1>;
      })}
    </>
  );
};

export default Table;
