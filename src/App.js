import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import './style/App.css';
import Me from './components/Me.js';
import Reports from "./components/Reports.js";
import Report from './components/Report.js';
import Report2 from './components/Report2.js';
import Report3 from './components/Report3.js';
import Report4 from './components/Report4.js';
import Report5 from './components/Report5.js';
import Form from "./components/Form.js";
import Login from "./components/Login.js";
import Add from "./components/Add.js";
import Edit from "./components/Edit.js";
import MyNavbar from "./components/Navbar.js"
import Chat from "./components/Chat.js";



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
      <MyNavbar />
        <Redirect exact from="/" to="/me" />
        <Route path="/me" exact component={Me} />
        <Route path="/reports/week/1" component={Report} />
        <Route path="/reports/week/2" component={Report2} />
        <Route path="/reports/week/3" component={Report3} />
        <Route path="/reports/week/4" component={Report4} />
        <Route path="/reports/week/5" component={Report5} />
        <Route path="/form" component={Form} />
        <Route path="/login" component={Login} />
        <Route path="/chat" component={Chat} />
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
