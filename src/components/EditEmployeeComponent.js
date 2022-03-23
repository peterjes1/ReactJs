import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import EmployeeService from '../Services/EmployeeService';


function EditEmployeeComponent() {
    const [eid, seteid] = useState('');
    const navigate = useNavigate();

    const onClickUpdate =(e)=>{
        e.preventDefault();


        EmployeeService.getEmployeeById(eid).then(response => {

            navigate(`/edit-employee/${eid}`);

        }).catch(err => {
            alert('Employee with id '+eid+' is not present')
            seteid('');
            navigate('/edit');
        })

    }
    return (
        <div>
            <br /><br />
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <h2>Edit Employee</h2>
                        <div className='card-body'>
                            <form>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Employee Id</label>
                                    <input type='text' name='id' className='form-control' placeholder='Enter the Employee Id' value={eid} onChange={(e) => seteid(e.target.value)} />
                                </div>
                                <button className='btn btn-success' onClick={(e)=>{onClickUpdate(e)}}>Update</button>
                                
                                <Link to={"/employee"} className="btn btn-danger t">Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div></div>
    )
}

export default EditEmployeeComponent