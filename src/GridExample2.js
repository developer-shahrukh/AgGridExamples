'use client'

// React Grid Logic
import React, { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

// Theme
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
// Core CSS
import { AgGridReact } from "ag-grid-react";

ModuleRegistry.registerModules([AllCommunityModule]);
/*
import { AgGridReact } from 'ag-grid-react';
import { useState } from 'react';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
ModuleRegistry.registerModules([AllCommunityModule]);

*/

const GridExample2 = () => {
    const [rowData, setRowData] = useState([
        { empoyeeId: "Emp125", name: "John", surname: "Doe", email: "johndoe@gmail.com", phone: "84569453121" },
        { empoyeeId: "Emp1549", name: "Saddam", surname: "Khan", email: "saddam@gmail.com", phone: "99512121" },
        { empoyeeId: "Emp198", name: "Kamran", surname: "Akhtar", email: "kamran@gmail.com", phone: "882456121" },
        { empoyeeId: "Emp452", name: "Vishal", surname: "Verma", email: "vishal@gmail.com", phone: "632574121" },
        { empoyeeId: "Emp921", name: "Abhishek", surname: "Deshmukh", email: "abhishek@gmail.com", phone: "77546121" },
        { empoyeeId: "Emp245", name: "Kunal", surname: "vedh", email: "kunal@gmail.com", phone: "882451121" },
        { empoyeeId: "Emp642", name: "Suresh", surname: "Jatav", email: "suresh@gmail.com", phone: "65896121" },
        { empoyeeId: "Emp234", name: "Dinesh", surname: "patidar", email: "dineshpatidare@gmail.com", phone: "96484511241" },
        { empoyeeId: "Emp845", name: "Aditya", surname: "singh", email: "aditya@gmail.com", phone: "894551121" },
        { empoyeeId: "Emp963", name: "Jonny", surname: "pushpad", email: "jonny@gmail.com", phone: "9911248741" },
        { empoyeeId: "Emp321", name: "Tonny", surname: "singh", email: "tonny@gmail.com", phone: "954482121" },
        { empoyeeId: "Emp159", name: "Monty", surname: "Singh", email: "Monty@gmail.com", phone: "95611988721" },
    ]);
    const [columnDef, setColumnDef] = useState([
        { field: "employeeId" ,filter: true},
        { field: "name" },
        { field: "surname" },
        { field: "email" },
        { field: "phone" }
    ]);
    return (
        <div style={{ height: "90%", width: "100%" }}>
            <AgGridReact rowData={rowData} columnDefs={columnDef} />
        </div>
    )

}

export default GridExample2;