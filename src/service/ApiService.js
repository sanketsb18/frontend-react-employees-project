// import axios from "axios";

// const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

// class ApiService {
//   fetchEmployees() {
//     return axios.get(EMPLOYEE_API_BASE_URL);
//   }

//   fetchEmployeeById(employeeId) {
//     return axios.get(EMPLOYEE_API_BASE_URL + "/" + employeeId);
//   }

//   deleteEmployee(employeeId) {
//     return axios.delete(EMPLOYEE_API_BASE_URL + "/" + employeeId);
//   }

//   addEmployee(employee) {
//     return axios.post("" + EMPLOYEE_API_BASE_URL, employee);
//   }

//   editEmployee(employee) {
//     return axios.put(EMPLOYEE_API_BASE_URL + "/" + employee.id, employee);
//   }
// }

// export default new ApiService();

import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class ApiService {
  getEmployees() {
    return axios.get(EMPLOYEE_API_BASE_URL);
  }

  createEmployee(employee) {
    return axios.post(EMPLOYEE_API_BASE_URL, employee);
  }

  getEmployeeById(employeeId) {
    return axios.get(EMPLOYEE_API_BASE_URL + "/" + employeeId);
  }

  updateEmployee(employee, employeeId) {
    return axios.put(EMPLOYEE_API_BASE_URL + "/" + employeeId, employee);
  }

  deleteEmployee(employeeId) {
    return axios.delete(EMPLOYEE_API_BASE_URL + "/" + employeeId);
  }
}

export default new ApiService();
