
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


import EmployeeService from '../Services/EmployeeService';

const Register = () => {

    const navigate = useNavigate();
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    




    const registeruser = (e) => {

        e.preventDefault();

        EmployeeService.register(username, password).then((response) => {
            // console.log(JSON.parse(response.data));
            if (response.data.jwtToken) {
                localStorage.setItem('user', JSON.stringify(response.data));


                navigate("/employee");
                window.location.reload();
            }
            navigate("/login");

        }).catch(error => {

            setusername('');
            setpassword('');

            console.log(JSON.stringify(error));
        });

    }

   
    return (
        <div className=''>

            <br /><br />
            <div className='container '>
                <div id='check'></div>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        Register
                        <div className='card-body'>
                            <form onSubmit={(e) => { registeruser(e) }}>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>User Name:</label>
                                    <input type='text' required placeholder='Enter the User Name'
                                        name='name'
                                        className='form-control'
                                        value={username}
                                        onChange={(e) => setusername(e.target.value)} />
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-label'>Password:</label>
                                    <input type='password' required placeholder='Enter the Password'
                                        name='password'
                                        className='form-control'
                                        value={password}
                                        onChange={(e) => setpassword(e.target.value)} />
                                </div>
                                
                                <button className='btn btn-success' type='submit' disabled={username.length === 0 || password.length === 0 }>Register</button>
                                <Link to={"/"} className="btn btn-danger t">Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default Register;