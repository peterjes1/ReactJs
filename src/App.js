import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeComponent from './components/EmployeeComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';
import HomeComponent from './components/HomeComponent';
import Login from './components/Login';
import EditEmployeeComponent from './components/EditEmployeeComponent';
import Register from './components/Register';


function App() {
  return (
    <div>
      <Router>
    <HeaderComponent/>
    <div className='container'>
      <Routes>
        <Route exact path='/' element={<HomeComponent/>}/>
        <Route path='/employee' element={<EmployeeComponent/>}/>
        <Route path='/add-employee' element={<AddEmployeeComponent/>}/>
        <Route path='/edit-employee/:eId' element={<AddEmployeeComponent/>}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/logout' element={<Login/>}/>
        <Route path='/edit' element={<EditEmployeeComponent/>}/>
      </Routes>
    </div>
    
    <FooterComponent/>
    </Router>
    </div>
  );
}

export default App;
