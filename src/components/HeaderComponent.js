import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import EmployeeService from '../Services/EmployeeService'

const HeaderComponent = () => {


    const [currentUser, setcurrentUser] = useState(undefined);
    const [isAdmin, setisAdmin] = useState(false);

    useEffect(() => {
      
    const user = JSON.parse(localStorage.getItem('user'));
      if(user){
          setcurrentUser(user);
          EmployeeService.getIsAdmin().then(response => {
              setisAdmin(response.data);
              console.log(response.data);
              
          })
      }
    }, [])
    
    
    const logoutpage =()=>{

        EmployeeService.logout();
        setcurrentUser(JSON.parse(localStorage.getItem('user')));
        

    }
    return (
        <div>
            
            <header>
                <nav className='navbar navbar-dark bg-dark'>
                    <ul className='navbar nav mr-auto'>

                        <li>
                            <a href='http://localhost:3000' className='navbar-brand'>
                                Employee Operation Application
                            </a></li>
                       {(currentUser && isAdmin) && (<li><Link to="/add-employee" className='nav-link' >Add Employee</Link></li>)}
                       {(currentUser && isAdmin) && (<li><Link to="/edit" className='nav-link' >Update Employee</Link></li>)}
                       {currentUser && (<li><Link to="/employee" className='nav-link'>Employee List</Link></li>)}

                    </ul>

                    <nav className='navbar-right '>
                        <ul className='navbar nav mr-auto'>
                        { !currentUser && (<li><Link to={"/login"} className='nav-link'>Login</Link></li>)}
                        { !currentUser && (<li><Link to={"/register"} className='nav-link'>Register</Link></li>)}
                        {currentUser && (<li><Link to={"/logout"} onClick={()=>{logoutpage()}} className='nav-link'>Logout</Link></li>)}
                    </ul>
                    </nav>
                    
                </nav>
            </header>
        </div>
    )
}

export default HeaderComponent