import axios from 'axios';

const EMPLOYEE_REST_API_URL = 'http://localhost:9191/getEmployees'
const EMPLOYEE_REST_API_URL_SAVE = 'http://localhost:9191/saveEmployee'
const EMPLOYEE_REST_API_URL_ID = 'http://localhost:9191/getEmployee'
const EMPLOYEE_REST_API_URL_DELETE = 'http://localhost:9191/deleteEmployee'

class EmployeeService{

    getEmployees(){
        return axios.get(EMPLOYEE_REST_API_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_REST_API_URL_SAVE,employee);
    }

    getEmployeeById(id){
        return axios.get(EMPLOYEE_REST_API_URL_ID+'/'+id);
    }

    updateEmployee(id, employee){
        return axios.put(EMPLOYEE_REST_API_URL_SAVE+"/"+id,employee);
    }

    deleteEmployee(id){
        return axios.delete(EMPLOYEE_REST_API_URL_DELETE+"/"+id);
    }
}

export default new EmployeeService();