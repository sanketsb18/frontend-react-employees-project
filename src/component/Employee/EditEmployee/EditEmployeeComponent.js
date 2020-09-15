import React, { Component } from "react";
import ApiService from "service/ApiService";

class EditEmployeeComponent extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      city: "",
      email: "",
      salary: "",
      message: "",
    };
    this.saveEmployee = this.saveEmployee.bind(this);
    this.loadEmployee = this.loadEmployee.bind(this);
  }

  componentDidMount() {
    this.loadEmployee();
  }

  loadEmployee() {
    ApiService.fetchEmployeeById(
      window.localStorage.getItem("employeeId")
    ).then((res) => {
      let employee = res.data.result;
      this.setState({
        id: employee.id,
        username: employee.username,
        password: employee.password,
        firstName: employee.firstName,
        lastName: employee.lastName,
        email: employee.email,
        city: employee.city,
        message: employee.message,
        salary: employee.salary,
      });
    });
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  saveEmployee = (e) => {
    e.preventDefault();
    let employee = {
      username: this.state.username,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      city: this.state.city,
      email: this.state.email,
      mobileNumber: this.state.mobileNumber,
      salary: this.state.salary,
      message: this.state.message,
    };

    ApiService.editEmployee(employee).then((res) => {
      this.setState({ message: "Employee added successfully." });
      this.props.history.push("/employees");
    });
  };

  render() {
    return (
      <div>
        <h2 className="text-center"> Edit Employee Details </h2>
        <form>
          <div className="form-group">
            <label>First Name:</label>
            <input
              type="text"
              placeholder="firstname"
              name="firstName"
              className="form-control"
              value={this.state.firstName}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label>Last Name:</label>
            <input
              type="text"
              placeholder="lastname"
              name="lastName"
              className="form-control"
              value={this.state.lastName}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              placeholder="username"
              name="username"
              className="form-control"
              value={this.state.username}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="form-control"
              value={this.state.password}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label>City:</label>
            <input
              type="text"
              placeholder="city"
              name="city"
              className="form-control"
              value={this.state.city}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="text"
              placeholder="you@example.com"
              name="email"
              className="form-control"
              value={this.state.email}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label>Salary:</label>
            <input
              type="number"
              placeholder="salary"
              name="salary"
              className="form-control"
              value={this.state.salary}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label>Message:</label>
            <input
              type="text"
              placeholder="message"
              name="message"
              className="form-control"
              value={this.state.message}
              onChange={this.onChange}
            />
          </div>

          <button className="btn btn-success" onClick={this.saveUser}>
            {" "}
            Update{" "}
          </button>
        </form>
      </div>
    );
  }
}
export default EditEmployeeComponent;
