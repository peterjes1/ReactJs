import React,{useEffect, useState} from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom';
import EmployeeService from '../Services/EmployeeService'

const AddEmployeeComponent = () => {
    const [eName, seteName] = useState('')
    const [eDesignation, seteDesignation] = useState('')
    const navigate = useNavigate()
    const {eId} = useParams();

    useEffect(() => {
     EmployeeService.getEmployeeById(eId).then((response)=>{
         seteName(response.data.eName);
         seteDesignation(response.data.eDesignation);
     }).catch(error=>{
         console.log(error)
        })
    }, [eId])
    
                  
    const saveOrUpdateEmployee = (e)=>{
        e.preventDefault();
        const employee={eName,eDesignation};
        if(eId){
            EmployeeService.updateEmployee(eId,employee).then((response)=>{
                navigate('/employee');
            })

        }
        else{
            EmployeeService.createEmployee(employee).then((response)=>{

                console.log(response.data);
    
                navigate('/');
            }).catch(error=>{
                console.log(error)
            })

        }
       
    }
    const title=()=>{
        if(eId){
            return <h2 className='text-center'>Update Employee</h2>;
        }
        else{
            return <h2 className='text-center'>Add Employee</h2>;
        }

    }

  return (
      
    <div>
        <br/><br/>
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    {
                        title()
                    }
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Employee Name:</label>
                                <input type ='text' required placeholder='Enter Employee Name'
                                name='name'
                                className='form-control'
                                value={eName}
                                onChange= {(e)=> seteName(e.target.value)}/>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Employee Designation:</label>
                                <input type ='text' required placeholder='Enter Employee Designation'
                                name='designation'
                                className='form-control'
                                value={eDesignation}
                                onChange= {(e)=> seteDesignation(e.target.value)}/>
                            </div>
                            <button className='btn btn-success' onClick={(e)=>{saveOrUpdateEmployee(e)}}>Add Employee</button>
                            <Link to={"/employee"} className="btn btn-danger t">Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AddEmployeeComponent