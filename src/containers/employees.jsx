import React, { Component } from "react";
import axios from "axios";

class employees extends Component {
  state = {
    people: Array,
  };

  componentDidMount() {
    const employees = [];
    axios
      .get("https://randomuser.me/api/?results=3")
      .then((response) => {
        console.log(response.data.results);
        let data = response.data.results;
        for (let i = 0; i < data.length; i++) {
          employees[i] = {
            firstName: data[i].name.first,
            lastName: data[i].name.first,
            thumbnail: data[i].picture.thumbnail,
            id: i + 1,
          };
        }
        this.setState({
          people: employees,
        });
        console.log("the employees", employees);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>the employees page </h1>
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">Picture</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Id</th>
            </tr>
          </thead>
          <tbody>
            {/* take row and make a component , assign props in component for data (firstName ect), require component into this file, replace hardcode as map of state, inside map method generate compnent and pass props for as many results */}
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
        {/* {this.state.people.map(person =>{

        })} */}
      </div>
    );
  }
}

export default employees;
