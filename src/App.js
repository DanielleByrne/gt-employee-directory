import React from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import employees from './containers/employees';
import Employees from "./containers/employees"


function App() {
  return (
    <div>
      <Employees/>
    </div>
    // <Router>
    //   <Route exact path="/" component = {employees}/>
    // </Router>
  );
}

export default App;
