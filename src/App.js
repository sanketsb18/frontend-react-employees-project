import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddEmployeeComponent from "./component/Employee/AddEmployee/AddEmployeeComponent";
import EmployeeListComponent from "./component/Employee/EmployeeList/EmployeeListComponent";
import EditEmployeeComponent from "./component/Employee/EditEmployee/EditEmployeeComponent";

function App() {
  return (
    <div className="container">
      <Router>
        <div className="col-md-6">
          <header>
            <h1 className="text-center" style={style}>
              Employee Directory Application
            </h1>
          </header>

          <Switch>
            <Route path="/" exact component={EmployeeListComponent} />
            <Route path="/employees" component={EmployeeListComponent} />
            <Route path="/add-employee" component={AddEmployeeComponent} />
            <Route path="/edit-employee" component={EditEmployeeComponent} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

const style = {
  color: "red",
  margin: "10px",
};

export default App;
