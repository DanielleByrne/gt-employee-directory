import React, { Component } from "react";
import axios from "axios";

class employees extends Component {
  state = {
    search: "",
    employees: [],
    filteredEmployees: [],
  };

  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=50").then((response) => {
    //   console.log("the response", response.data.results);

      this.setState({
        employees: response.data.results,
        filteredEmployees: response.data.results,
      });
    //   console.log(this.state.filteredEmployees);
    });
  }

  sortEmployees = (field) => {
    function compare(a, b) {
      if (a["name"][field] > b["name"][field]) return 1;
      if (a["name"][field] < b["name"][field]) return -1;
      return 0;
    }
    const sortedEmployees = this.state.employees.sort(compare);
    this.setState({
      employees: sortedEmployees,
    });
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSearch = (event) => {
    event.preventDefault();
    this.filterEmployees();
  };

  filterEmployees = () => {
    const searchTerm = this.state.search.toLowerCase();
    this.setState({
      filteredEmployees: this.state.employees.filter((employee) =>
        employee.name.last.toLowerCase().includes(searchTerm)
      ),
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <h1>Empoyee Directory </h1>
          <div className="row">
            <div className="col">
              <form onSubmit={this.handleSearch}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search for an Employee by Last Name"
                    name="search"
                    value={this.state.search}
                    onChange={this.handleInputChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Search
                </button>
              </form>
            </div>
          </div>
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th
                  scope="col"
                  onClick={() => {
                    this.sortEmployees("first");
                  }}
                >
                  <button className="btn btn-dark">First Name</button>
                </th>
                <th
                  scope="col"
                  onClick={() => {
                    this.sortEmployees("last");
                  }}
                >
                  <button className="btn btn-dark">Last Name</button>
                </th>
                <th scope="col">Thumbnail</th>
              </tr>
            </thead>
            <tbody>
              {this.state.filteredEmployees.map((employee, index) => (
                <tr key={employee.login.uuid}>
                  <th scope="row">{index + 1}</th>
                  <td>{employee.name.first}</td>
                  <td>{employee.name.last}</td>
                  <td>
                    <img
                      src={employee.picture.thumbnail}
                      alt="Employee Thumbnail"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default employees;
