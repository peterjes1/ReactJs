import axios from 'axios';
import authHeader from './authHeader';

const EMPLOYEE_REST_API_URL = 'http://localhost:9191/getEmployees'
const EMPLOYEE_REST_API_URL_SAVE = 'http://localhost:9191/saveEmployee'
const EMPLOYEE_REST_API_URL_ID = 'http://localhost:9191/getEmployee'
const EMPLOYEE_REST_API_URL_DELETE = 'http://localhost:9191/deleteEmployee'
const EMPLOYEE_REST_API_URL_LOGIN = 'http://localhost:9191/authenticate'
const EMPLOYEE_REST_API_ADMIN = 'http://localhost:9191/isAdmin'
const EMPLOYEE_REST_API_REGISTER = 'http://localhost:9191/register'

class EmployeeService{

    // {headers:{ 'Authorization' : 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqbyIsImV4cCI6MTY0NzI1OTkzOSwiaWF0IjoxNjQ3MjQxOTM5fQ.9u-Gb_OxpMv6NTu8AAjV5TeCFaUUOfOJQI9vd60hTVyjkjme_2iS9LX8wLTzuAXZWKdAY4Inmbj75b8gtD2wpg'}}
    getEmployees(){
        return axios.get(EMPLOYEE_REST_API_URL,{headers: authHeader() });
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_REST_API_URL_SAVE,employee,{headers: authHeader() });
    }

    getEmployeeById(id){
        return axios.get(EMPLOYEE_REST_API_URL_ID+'/'+id,{headers: authHeader() });
    }

    updateEmployee(id, employee){
        return axios.put(EMPLOYEE_REST_API_URL_SAVE+"/"+id,employee,{headers: authHeader() });
    }

    deleteEmployee(id){
        return axios.delete(EMPLOYEE_REST_API_URL_DELETE+"/"+id,{headers: authHeader() });
    }

    loginwith(userName,password){
        return axios.post(EMPLOYEE_REST_API_URL_LOGIN, {userName,password});
    }
    logout(){
        localStorage.removeItem('user');
    }

    getIsAdmin(){
        const user = JSON.parse(localStorage.getItem('user'));
        const jwtToken = user.jwtToken;
        return axios.post(EMPLOYEE_REST_API_ADMIN, {jwtToken});
    }

    register(username,password){
        return axios.post(EMPLOYEE_REST_API_REGISTER,{username,password});

    }
}

export default new EmployeeService();