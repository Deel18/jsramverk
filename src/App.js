import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import './style/App.css';
import Me from './components/Me.js';
import Report from './components/Report.js';
import Report2 from './components/Report2.js';
import Report3 from './components/Report3.js';
import Report4 from './components/Report4.js';
import Report5 from './components/Report5.js';
import Form from "./components/Form.js";
import Login from "./components/Login.js";
import Add from "./components/Add.js";
import Edit from "./components/Edit.js";



const loggedIn = {
    getToken: () => {
        if (localStorage.getItem("token")) {
            //console.log("false", localStorage)
            return true;
        }
        //console.log(localStorage)
        return false
    }
}

//console.log(loggedIn.getToken())


function AppRouter() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/me">Me</Link>
            </li>
            <li>
              <Link to="/reports/week/1">Kmom01</Link>
            </li>
            <li>
              <Link to="/reports/week/2">Kmom02</Link>
            </li>
            <li>
              <Link to="/reports/week/3">Kmom03</Link>
            </li>
            <li>
              <Link to="/reports/week/4">Kmom04</Link>
            </li>
            <li>
              <Link to="/reports/week/5">Kmom05</Link>
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
            <li>
              <Link to="/edit">Edit</Link>
            </li>
          </ul>
        </nav>
        <Redirect exact from="/" to="/me" />
        <Route path="/me" exact component={Me} />
        <Route path="/reports/week/1" component={Report} />
        <Route path="/reports/week/2" component={Report2} />
        <Route path="/reports/week/3" component={Report3} />
        <Route path="/reports/week/4" component={Report4} />
        <Route path="/reports/week/5" component={Report5} />
        <Route path="/form" component={Form} />
        <Route path="/login" component={Login} />
        <Route exact path="/add" render={() => (
            loggedIn.getToken() ? ( <Route component={Add} />)
            : (<Redirect to="/login" />)
        )} />

        <Route exact path="/edit" render={() => (
            loggedIn.getToken() ? ( <Route component={Edit} />)
            : (<Redirect to="/login" />)
        )} />

      </div>
    </Router>
  );
}

export default AppRouter;
