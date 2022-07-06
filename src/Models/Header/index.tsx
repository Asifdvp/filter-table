import {useState,useEffect} from 'react';
import axios from 'axios';
import Search from '../../Components/Search/index';
import Table from '../../Components/Table/index';
import { Stack } from '@mui/material';

import { IThead, ITbody } from "../../data";
import Best from '../../Components/Pagination/best';
interface data {
    thead: IThead[];
    tbody: ITbody[];
  }



const index = () => {
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
    
        };
        useEffect(() => {
            getData("http://localhost:3000/data");
          }, []);
  return (
    <Stack
    spacing={5}
    sx={{
      padding: "40px 70px",
      overflow:"hidden"
    }}
  >
     <Search/>
     {/* <Table thead={thead} tbody={tbody} deleteItem={deleteItem}/> */}
     <Best thead={thead} tbody={tbody} deleteItem={deleteItem} />
    </Stack>
  )
}

export default index