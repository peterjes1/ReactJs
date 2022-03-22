import React, {useState,useEffect} from 'react'
// import { Link } from 'react-router-dom';
import EmployeeService from '../Services/EmployeeService'
import './EmployeeComponent.css'

 function EmployeeComponent() {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
      
    getEmployees();
      
    }, [])
    

    const getEmployees=()=>{
        EmployeeService.getEmployees().then((response)=>{
            setEmployees(response.data);
            // console.log(response.data);
        }).catch(error=>{
            console.log(error);
        });
    }

    const deleteEmployee=(id)=>{
       const sure = window.confirm("Are you sure to delete the record?");
        if(sure){
        EmployeeService.deleteEmployee(id).then((response)=>{
            console.log(response.data);
            getEmployees();
            alert("Employee record is deleted!");
        }).catch(error=>{
            console.log(error);
        })
        
    }
    }

  return (
    <div className='container'>

<h1 className='text-center'>Employee List</h1>

{/* <Link to = "/add-employee" className='btn btn-primary mb-2'>Add Employee</Link> */}
<div className='table-css table-responsive'>
 <table className='table table-bordered table-striped table-hover '>
   
     <thead >
         <tr>
            
             <th>Employee Name</th>
             <th>Employee Designation</th>
             <th>Action</th>
         </tr>
     </thead>
     <tbody>
         {
             employees.map(employee=>
                 <tr key={employee.eId}>
                     
                     <td>{employee.eName}</td>
                    <td>{employee.eDesignation}</td>
                    <td>
                        {/* <Link className="btn btn-info" to={`/edit-employee/${employee.eId}`} >Update</Link> */}
                    <button className='btn btn-danger'  style={{marginLeft:"10px"}} onClick={()=>{
                        deleteEmployee(employee.eId)
                    }
                    }>Delete</button>
                    </td>
                            </tr>
             )
         }
     </tbody>
 </table>
</div>
    </div>
  )
}

export default EmployeeComponent;