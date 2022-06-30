import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css'
import  Table  from './Components/Table'
interface IThead {
  id: number;
  name: string;
}
function App() {

  // const [data,setData]= useState<any[]>([])
  const [thead,setthead] = useState<IThead>({id:1,name:"df"})
  const [tbody,setTbody] = useState<[]>([])
  
  async function getData(url:string){
   const res =  await axios.get(url)
   setthead(res.data.thead);
   setTbody(res.data.tbody);
  
   }
   
 // const [tbody,setBody]= useState([])
 useEffect( ()=>{
  getData("http://localhost:3000/data");
 },[])
  return (
    <div className="App">
   <Table thead={thead} tbody={tbody}/>
    </div>
  )
}

export default App
