import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { IThead, ITbody } from "./data";
import Table from "./Components/Table";
import Header from "./Components/Header";
interface data {
  thead: IThead[];
  tbody: ITbody[];
}
function App() {
  const [thead, setthead] = useState<IThead[]>([{id:2,name:""}]);
  const [tbody, setTbody] = useState<ITbody[]>([]);

  const getData = async (url: string) => {
    const res = await axios.get(url)
    const data:data = res.data;
    const thead:IThead[]= data.thead;
    const tbody:ITbody[] = data.tbody;
    // (thead:React.SetStateAction<IThead[]>)=>setthead(thead);
    // (tbody:React.SetStateAction<ITbody[]>)=>setTbody(tbody);
    setthead(thead);
    setTbody(tbody);
  };
  useEffect(() => {
    getData("http://localhost:3000/data");
  }, []);
  return (
    <div className="App">
      <Header thead={thead} tbody={tbody}/>
      {/* <Table thead={thead} tbody={tbody} /> */}
    </div>
  );
}

export default App;
