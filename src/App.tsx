import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { IThead, ITbody } from "./data";
import Table from "./Components/Table";
import Header from "./Components/Header";
interface IThead1 {
  thead: IThead | undefined;
}
interface ITbody1 {
  tbody: ITbody | undefined;
}
function App() {
  // const [data,setData]= useState<any[]>([])
  // const [thead,setthead] = useState< IThead | []>([] )
  // const [tbody,setTbody] = useState< ITBody | []>([])

  const [thead, setthead] = useState<IThead1 | []>([]);
  const [tbody, setTbody] = useState<ITbody1 | []>([]);

  const getData = async (url: string) => {
    const res = await axios.get(url);
    setthead(res.data.thead);
    setTbody(res.data.tbody);
  };
  // async function getData(url:string){
  //  const res =  await axios.get(url)
  //  setthead(res.data.thead);
  //  setTbody(res.data.tbody);

  //  }

  // const [tbody,setBody]= useState([])
  useEffect(() => {
    getData("http://localhost:3000/data");
  }, []);


















  
 






  return (
    <div className="App">
      <Header/>
      {/* <Table thead={thead} tbody={tbody} /> */}

      
    </div>
  );
}

export default App;
