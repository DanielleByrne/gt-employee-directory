import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import employees from './containers/employees';
import employees from "./containers/employees"


function App() {
  return (
    <Router>
      <Route exact path="/" component = {employees}/>
    </Router>
  );
}

export default App;
