import React, { Component } from "react";
// import axios from "axios";

class employees extends Component {
  state = {
    search: "",
    employees: [
      {
        firstName: "Melissa",
        id: 1,
        lastName: "Larson",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/12.jpg",
      },
      {
        firstName: "Madison",
        id: 2,
        lastName: "Taylor",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/89.jpg",
      },
      {
        firstName: "Britanny",
        id: 3,
        lastName: "Larson",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/11.jpg",
      },
    ],
    //array made in tutoring, can't get it to combine with  what we did in class
    // people: Array,
  };

  componentDidMount() {
    // this.sortEmployees();
    // const employees = [];
    // axios
    //   .get("https://randomuser.me/api/?results=3")
    //   .then((response) => {
    //     console.log(response.data.results);
    //     let data = response.data.results;
    //     for (let i = 0; i < data.length; i++) {
    //       employees[i] = {
    //         firstName: data[i].name.first,
    //         lastName: data[i].name.first,
    //         thumbnail: data[i].picture.thumbnail,
    //         id: i + 1,
    //       };
    //     }
    //     this.setState({
    //       people: employees,
    //     });
    //     console.log("the employees", employees);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }

  sortEmployees = (field) => {
    function compare(a, b) {
      if (a[field] > b[field]) return 1;
      if (a[field] < b[field]) return -1;
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
}

  filterEmployees = () => {
    const searchTerm = this.state.search.toLowerCase();
    this.setState({
      employees: this.state.employees.filter((employee) =>
        employee.lastName.toLowerCase().includes(searchTerm)
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
              <form onSubmit = {this.handleSearch}>
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
                    this.sortEmployees("firstName");
                  }}
                >
                  <button className="btn btn-dark">First Name</button>
                </th>
                <th
                  scope="col"
                  onClick={() => {
                    this.sortEmployees("lastName");
                  }}
                >
                  <button className="btn btn-dark">Last Name</button>
                </th>
                <th scope="col">Thumbnail</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((employee) => (
                <tr>
                  <th scope="row">{employee.id}</th>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>
                    <img src={employee.thumbnail} alt="Employee Thumbnail" />
                  </td>
                </tr>
              ))}
              {/* take row and make a component , assign props in component for data (firstName ect), require component into this file, replace hardcode as map of state, inside map method generate compnent and pass props for as many results */}
            </tbody>
          </table>
          {/* {this.state.people.map(person =>{})} */}
        </div>
      </div>
    );
  }
}

export default employees;
