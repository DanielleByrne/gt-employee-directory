import React, { Component } from "react";
// import axios from "axios";

class employees extends Component {
  state = {
    employees: [
      {
        firstName: "Melissa",
        id: 1,
        lastName: "Melissa",
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

  render() {
    return (
      <div>
        <div className="container">
          <h1>Empoyee Directory </h1>
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                {/* <th scope="col">Picture</th> */}
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Id</th>
                <th scope="col">Thumbnail</th>
              </tr>
            </thead>
            <tbody>
              {/* take row and make a component , assign props in component for data (firstName ect), require component into this file, replace hardcode as map of state, inside map method generate compnent and pass props for as many results */}
              <tr>
                <td>{this.state.employees[0].firstName}</td>
                <td>{this.state.employees[0].lastName}</td>
                <td>{this.state.employees[0].id}</td>
                <td>
                  <img
                    src={this.state.employees[0].thumbnail}
                    alt="Employee Thumbnail"
                  />
                </td>
              </tr>
              <tr>
                <td>{this.state.employees[1].firstName}</td>
                <td>{this.state.employees[1].lastName}</td>
                <td>{this.state.employees[1].id}</td>
                <td>
                  <img
                    src={this.state.employees[1].thumbnail}
                    alt="Employee Thumbnail"
                  />
                </td>
              </tr>
              <tr>
                <td>{this.state.employees[2].firstName}</td>
                <td>{this.state.employees[2].lastName}</td>
                <td>{this.state.employees[2].id}</td>
                <td>
                  <img
                    src={this.state.employees[2].thumbnail}
                    alt="Employee Thumbnail"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          {/* {this.state.people.map(person =>{

        })} */}
        </div>
      </div>
    );
  }
}

export default employees;
