'use client'


import { AgGridReact } from 'ag-grid-react';
import {useState} from 'react';
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
ModuleRegistry.registerModules([AllCommunityModule]);


const GridExample2 = () => {
    const [data, setData] = useState([
        { employeeId: "Emp125", name: "John", surname: "Doe", email: "johndoe@gmail.com", phone: "84569453121" },
        { employeeId: "Emp1549", name: "Saddam", surname: "Khan", email: "saddam@gmail.com", phone: "99512121" },
        { employeeId: "Emp198", name: "Kamran", surname: "Akhtar", email: "kamran@gmail.com", phone: "882456121" },
        { employeeId: "Emp452", name: "Vishal", surname: "Verma", email: "vishal@gmail.com", phone: "632574121" },
        { employeeId: "Emp921", name: "Abhishek", surname: "Deshmukh", email: "abhishek@gmail.com", phone: "77546121" },
        { employeeId: "Emp245", name: "Kunal", surname: "vedh", email: "kunal@gmail.com", phone: "882451121" },
        { employeeId: "Emp642", name: "Suresh", surname: "Jatav", email: "suresh@gmail.com", phone: "65896121" },
        { employeeId: "Emp234", name: "Dinesh", surname: "patidar", email: "dineshpatidare@gmail.com", phone: "96484511241" },
        { employeeId: "Emp845", name: "Aditya", surname: "singh", email: "aditya@gmail.com", phone: "894551121" },
        { employeeId: "Emp963", name: "Jonny", surname: "pushpad", email: "jonny@gmail.com", phone: "9911248741" },
        { employeeId: "Emp321", name: "Tonny", surname: "singh", email: "tonny@gmail.com", phone: "954482121" },
        { employeeId: "Emp159", name: "Monty", surname: "Singh", email: "Monty@gmail.com", phone: "95611988721" },
    ]);
    const [columnDefs, setColumnDefs] = useState([
        { field: "employeeId" ,filter: true},
        { field: "name" ,filter :true},
        { field: "surname" ,filter:true},
        { field: "email" },
        { field: "phone" }
    ]);
    return (
        <div style={{ height: 500,width:"100%"}}>
            <AgGridReact rowData={data} columnDefs={columnDefs} />
        </div>
    )

}

export default GridExample2;