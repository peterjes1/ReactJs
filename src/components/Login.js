import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EmployeeService from '../Services/EmployeeService';

const Login = () => {

    const navigate = useNavigate();
    const [userName, setuserName] = useState('');
    const [password,setpassword] = useState('');
    



    const loginuser = (e)=>{

        e.preventDefault();
       
        EmployeeService.loginwith(userName,password).then((response)=>{
            // console.log(JSON.parse(response.data));
            if(response.data.jwtToken){
                localStorage.setItem('user',JSON.stringify(response.data));

                navigate("/employee");
            }
        }).catch(error=>{
            console.log(JSON.stringify(error));
        });

    }

  return (
    <div className='bg-secondary'>

<br/><br/>
        <div className='container '>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    Login
                    <div className='card-body'>
                        <form onSubmit={(e)=>{loginuser(e)}}>
                            <div className='form-group mb-2'>
                                <label className='form-label'>User Name:</label>
                                <input type ='text' required placeholder='Enter the User Name'
                                name='name'
                                className='form-control'
                                value={userName}
                                onChange= {(e)=> setuserName(e.target.value)}/>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Password:</label>
                                <input type ='password' required placeholder='Enter the Password'
                                name='password'
                                className='form-control'
                                value={password}
                                onChange= {(e)=> setpassword(e.target.value)}/>
                            </div>
                            <button className='btn btn-success' type='submit'disabled={userName.length===0 || password.length===0}>Login</button>
                            <Link to={"/"} className="btn btn-danger t">Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>




    </div>
  )
}

export default Login