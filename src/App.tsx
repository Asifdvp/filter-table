import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { IThead, ITbody } from "./data";
import Header from './Models/Header/index'
// import Header from "./Components/Header";
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
 

  //element silinmesi
  const deleteItem= async (id:any)=>{
    if(!(isNaN(id))){
      let newData =  await[...tbody];
      newData = tbody.filter((item)=>{
       if(item.id !== id){

         return item
       }
     }
      )
      setTbody(newData)
    
      console.log(newData)
    }
 
//  setTbody(newData)

    }
//     console.log(e.target.parentElement.parentElement.parentElement.childElementCount);
// console.log(e.target.parentElement.parentElement.parentElement);
// console.log(e.target.parentElement.parentElement.parentElement.childElementCount);
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
