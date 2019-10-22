import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Me from './Me.js';
import Report from './Report.js';
import Report2 from './Report2.js';
import Form from "./Form.js";
import './App.css';



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
          </ul>
        </nav>

        <Route path="/" exact component={Me} />
        <Route path="/reports/week/1" component={Report} />
        <Route path="/reports/week/2" component={Report2} />
        <Route path="/form" component={Form} />
      </div>
    </Router>
  );
}

export default AppRouter;
