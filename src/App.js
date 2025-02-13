'use client'


import { AgGridReact } from 'ag-grid-react';
import {useState} from 'react';
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
ModuleRegistry.registerModules([AllCommunityModule]);



const App=()=>{
 const [data,setData]=useState([
  {id: 1,name: "John Doe",phone: "123123456"},
  {id: 2,name: "Jonny",phone: "998525986"},
  {id: 3,name: "Ashwini",phone: "8785524656"},
  {id: 4,name: "Abhay",phone: "6568418526"},
  {id: 5,name: "Tommy",phone: "8547856418"},
 ]);

 const [columnDefs,setColumnDefs]=useState([
  {field: "id"},
  {field: "name"},
  {field: "phone"}
 ]);
  return (
    <div style={{height:500}}>
      <AgGridReact rowData={data} columnDefs={columnDefs}
      />
    </div>
  );

}

export default App;