import React, {useState,useEffect} from 'react'
 import {  useNavigate } from 'react-router-dom';
import EmployeeService from '../Services/EmployeeService'
import './EmployeeComponent.css'

 function EmployeeComponent() {

    const [employees, setEmployees] = useState([]);
    const [isAdmin, setisAdmin] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
      
    getEmployees();
    const user = JSON.parse(localStorage.getItem('user'));
      if(user){
          
          EmployeeService.getIsAdmin().then(response => {
              setisAdmin(response.data);
              console.log(response.data);
              
          })
      }
      
    }, [])
    

    const getEmployees=()=>{
        EmployeeService.getEmployees().then((response)=>{
            setEmployees(response.data);
            // console.log(response.data);
        }).catch(error=>{
            console.log(error);
        });
    }

    // const deleteEmployee=(id)=>{
    //    const sure = window.confirm("Are you sure to delete the record?");
    //     if(sure){
    //     EmployeeService.deleteEmployee(id).then((response)=>{
    //         console.log(response.data);
    //         getEmployees();
    //         alert("Employee record is deleted!");
    //     }).catch(error=>{
    //         console.log(error);
    //     })
        
    // }
    // }

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
             <th>Employee Email</th>
             <th>Location</th>
         </tr>
     </thead>
     <tbody>
         {
             employees.map(employee=>
                 <tr onClick={isAdmin ? ()=>navigate(`/edit-employee/${employee.eId}`): ()=>{}}key={employee.eId}>
                     
                     <td>{employee.eName}</td>
                    <td>{employee.eDesignation}</td>
                    <td>{employee.eMail}</td>
                    <td>
                        {employee.location}
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