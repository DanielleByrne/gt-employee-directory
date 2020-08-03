import React, { Component } from 'react';
import axios from "axios";

class employees extends Component {

    state = {
        firstName: "",
        lastName: "",
        thumbnail: ""
    }

    componentDidMount(){
        axios 
        .get("https://randomuser.me/api/")
        .then((response)=>{
            console.log(response.data)
            this.setState({
                employee: response.data.message
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }


    render() {
        return (
            <div>
                <h1>the employees page </h1>
            </div>
        );
    }
}

export default employees;