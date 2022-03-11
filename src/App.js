import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeComponent from './components/EmployeeComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';


function App() {
  return (
    <div>
      <Router>
    <HeaderComponent/>
    <div className='container'>
      <Routes>
        <Route exact path='/' element={<EmployeeComponent/>}/>
        <Route path='/employee' element={<EmployeeComponent/>}/>
        <Route path='/add-employee' element={<AddEmployeeComponent/>}/>
        <Route path='/edit-employee/:eId' element={<AddEmployeeComponent/>}/>
      </Routes>
    </div>
    
    <FooterComponent/>
    </Router>
    </div>
  );
}

export default App;
