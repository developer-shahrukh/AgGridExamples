'use client'


import { AgGridReact } from 'ag-grid-react';
import {useState} from 'react';
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
ModuleRegistry.registerModules([AllCommunityModule]);



const GridExample1=()=>{
 const [data,setData]=useState([
  {id: 1,name: "John Doe",phone: "123123456"},
  {id: 2,name: "Jonny",phone: "998525986"},
  {id: 3,name: "Ashwini",phone: "8785524656"},
  {id: 4,name: "Abhay",phone: "6568418526"},
  {id: 5,name: "Tommy",phone: "8547856418"},
  {id: 1,name: "John Doe",phone: "123123456"},
  {id: 2,name: "Jonny",phone: "998525986"},
  {id: 3,name: "Ashwini",phone: "8785524656"},
  {id: 4,name: "Abhay",phone: "6568418526"},
  {id: 5,name: "Tommy",phone: "8547856418"},
  {id: 1,name: "John Doe",phone: "123123456"},
  {id: 2,name: "Jonny",phone: "998525986"},
  {id: 3,name: "Ashwini",phone: "8785524656"},
  {id: 4,name: "Abhay",phone: "6568418526"},
  {id: 5,name: "Tommy",phone: "8547856418"},
  {id: 1,name: "John Doe",phone: "123123456"},
  {id: 2,name: "Jonny",phone: "998525986"},
  {id: 3,name: "Ashwini",phone: "8785524656"},
  {id: 4,name: "Abhay",phone: "6568418526"},
  {id: 5,name: "Tommy",phone: "8547856418"},
  {id: 1,name: "John Doe",phone: "123123456"},
  {id: 2,name: "Jonny",phone: "998525986"},
  {id: 3,name: "Ashwini",phone: "8785524656"},
  {id: 4,name: "Abhay",phone: "6568418526"},
  {id: 5,name: "Tommy",phone: "8547856418"},
 ]);

 const [columnDefs,setColumnDefs]=useState([
  {field: "id"},
  {field: "name",filter:true},
  {field: "phone"}
 ]);
  return (
    <div style={{height:500}}>
      <AgGridReact rowData={data} columnDefs={columnDefs}
      />
    </div>
  );

}

export default GridExample1;