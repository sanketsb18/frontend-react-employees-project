import React, { Component } from "react";
import ApiService from "..service/ApiService";

class EmployeeListComponent extends Component {
  constructor() {
    super();
    this.state = {
      employees: [],
      message: null,
    };
    this.deleteEmployee = this.deleteEmployee.bind(this);
    this.editEmployee = this.editEmployee.bind(this);
    this.addEmployee = this.addEmployee.bind(this);
    this.reloadEmployeeList = this.reloadEmployeeList.bind(this);
  }

  componentDidMount() {
    this.reloadEmployeeList();
  }

  reloadEmployeeList() {
    ApiService.fetchEmployees().then((res) => {
      this.setState({ employees: res.data.result });
    });
  }

  deleteEmployee(employeeId) {
    ApiService.deleteEmployee(employeeId).then((res) => {
      this.setState({ message: "Employee deleted successfully." });
      this.setState({
        employees: this.state.employees.filter(
          (employee) => employee.id !== employeeId
        ),
      });
    });
  }

  editEmployee(id) {
    window.localStorage.setItem("employeeId", id);
    this.props.history.push("/edit-employee");
  }

  addEmployee() {
    window.localStorage.removeItem("employeeId");
    this.props.history.push("/add-employee");
  }

  render() {
    return (
      <div class="container">
        <div class="panel-heading">
          <h3 class="text-center">EMPLOYEES LIST</h3>
          <button className="btn btn-danger" onClick={() => this.addEmployee()}>
            {" "}
            Add Employee
          </button>
        </div>

        <table class="table table-striped">
          <thead class="thead-dark">
            <tr>
              <th className="hidden">Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Password</th>
              <th>City</th>
              <th>Email</th>
              <th>Mobile Number</th>
              <th>Salary</th>
              <th>Message</th>
            </tr>
          </thead>

          <tbody>
            {this.state.employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.username}</td>
                <td>{employee.password}</td>
                <td>{employee.city}</td>
                <td>{employee.email}</td>
                <td>{employee.mobileNumber}</td>
                <td>{employee.salary}</td>
                <td>{employee.message}</td>

                <button
                  className="btn btn-success"
                  onClick={() => this.deleteEmployee(employee.id)}
                >
                  {" "}
                  Delete
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => this.editEmployee(employee.id)}
                >
                  {" "}
                  Edit
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default EmployeeListComponent;
