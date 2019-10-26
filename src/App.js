import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import './style/App.css';
import Me from './components/Me.js';
import Report from './components/Report.js';
import Report2 from './components/Report2.js';
import Report3 from './components/Report3.js';
import Form from "./components/Form.js";
import Login from "./components/Login.js";
import Add from "./components/Add.js";

//localStorage.token = null;

const loggedIn = {
    getToken: () => {
        if (localStorage.getItem("token") === "null") {
            //console.log("false", localStorage)
            return false;
        }
        //console.log(localStorage)
        return true
    }
}

console.log(loggedIn.getToken())


function AppRouter() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Me</Link>
            </li>
            <li>
              <Link to="/reports/week/1">Kmom01</Link>
            </li>
            <li>
              <Link to="/reports/week/2">Kmom02</Link>
            </li>
            <li>
              <Link to="/form">Form</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/add">Add</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Me} />
        <Route path="/reports/week/1" component={Report} />
        <Route path="/reports/week/2" component={Report2} />
        <Route path="/reports/week/3" component={Report3} />
        <Route path="/form" component={Form} />
        <Route path="/login" component={Login} />
        <Route exact path="/add" render={() => (
            loggedIn.getToken() ? ( <Route component={Add} />)
            : (<Redirect to="/login" />)
        )} />
      </div>
    </Router>
  );
}

export default AppRouter;
