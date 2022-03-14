import React from 'react'
import { Link } from 'react-router-dom'
import EmployeeService from '../Services/EmployeeService'

const HeaderComponent = () => {

    const logoutpage =()=>{

        EmployeeService.logout();
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
                        <li><Link to="/add-employee" className='nav-link' >Add Employee</Link></li>
                        <li><Link to="/employee" className='nav-link'>Employee List</Link></li>

                    </ul>

                    <nav className='navbar-right '>
                        <ul className='navbar nav mr-auto'>
                        <li><Link to={"/login"} className='nav-link'>Login</Link></li>
                        <li><Link to={"/logout"} onClick={()=>{logoutpage()}} className='nav-link'>Logout</Link></li>
                    </ul>
                    </nav>
                    
                </nav>
            </header>
        </div>
    )
}

export default HeaderComponent