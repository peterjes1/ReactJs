import React,{useEffect, useState} from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom';
import EmployeeService from '../Services/EmployeeService'

const AddEmployeeComponent = () => {
    const [eName, seteName] = useState('')
    const [eDesignation, seteDesignation] = useState('')
    const [eMail, setEmail] = useState('')
    const [location,setLocation] = useState('')
    const navigate = useNavigate()
    const {eId} = useParams();

    useEffect(() => {
        if(eId){
     EmployeeService.getEmployeeById(eId).then((response)=>{
         seteName(response.data.eName);
         seteDesignation(response.data.eDesignation);
         setEmail(response.data.eMail);
         setLocation(response.data.location);
     }).catch(error => {
         console.log(error);
         
        })}
    }, [eId])
    
                  
    const saveOrUpdateEmployee = (e)=>{
        e.preventDefault();
        const employee={eName,eDesignation,eMail,location};
        if(eId){
            EmployeeService.updateEmployee(eId,employee).then((response)=>{
                navigate('/employee');
            })

        }
        else{
            EmployeeService.createEmployee(employee).then((response)=>{

                console.log(response.data);
    
                navigate('/employee');
            }).catch(error=>{
                console.log(error)
            })

        }
       
    }

    const deleteEmployee=(e)=>{
        e.preventDefault();
        const sure = window.confirm("Are you sure to delete the record?");
         if(sure){
         EmployeeService.deleteEmployee(eId).then((response)=>{
             console.log(response.data);
             navigate('/employee');
             alert("Employee record is deleted!");
             
         }).catch(error=>{
             console.log(error);
         })
         
     }
     }

    const title=()=>{
        if(eId){
            return <div> Update Employee</div>;
        }
        else{
            return <div> Add Employee</div>;
        }

    }
    const title1=()=>{
        if(eId){
            return <h2 className='text-center'>Update Employee</h2>

        }
        else{
            return <h2 className='text-center'>Add Employee</h2>
        }
    }

  return (
      
    <div>
        <br/><br/>
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    {
                        title1()
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
                            
                            <div className='form-group mb-2'>
                                <label className='form-label'>Employee Email:</label>
                                <input type ='text' required placeholder='Enter Employee Email'
                                name='email'
                                className='form-control'
                                value={eMail}
                                onChange= {(e)=> setEmail(e.target.value)}/>
                            </div>
                            
                            <div className='form-group mb-2'>
                                <label className='form-label'>Employee Location:</label>
                                <input type ='text' required placeholder='Enter Employee Location'
                                name='location'
                                className='form-control'
                                value={location}
                                onChange= {(e)=> setLocation(e.target.value)}/>
                            </div>
                            <button className='btn btn-success' style={{marginRight:"10px"}} onClick={(e)=>{saveOrUpdateEmployee(e)}}>{title()}</button>
                            {eId && <button className='btn btn-danger'   onClick={(e)=>{
                        deleteEmployee(e)
                    }
                    }>Delete</button>}
                            <Link to={"/employee"} className="btn btn-danger t" style={eId && {marginLeft:"10px"}}>Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AddEmployeeComponent