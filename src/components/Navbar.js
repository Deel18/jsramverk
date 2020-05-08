import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

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



export default class MyNavbar extends Component {


    render() {
        return (
            <>
            <Nav variant="pills">
                <Nav.Item>
                    <p class="navLinks"><Link to="/me">Me</Link></p>
                </Nav.Item>
                <Nav.Item>
                <Dropdown as={Nav.Item}>
                <p><Dropdown.Toggle as={Nav.Link}>Reports</Dropdown.Toggle></p>
                <Dropdown.Menu>
                <Dropdown.Item><Link to="/reports/week/1">Week 1</Link></Dropdown.Item>
                <Dropdown.Item><Link to="/reports/week/2">Week 2</Link></Dropdown.Item>
                <Dropdown.Item><Link to="/reports/week/3">Week 3</Link></Dropdown.Item>
                <Dropdown.Item><Link to="/reports/week/4">Week 4</Link></Dropdown.Item>
                <Dropdown.Item><Link to="/reports/week/5">Week 5</Link></Dropdown.Item>
                <Dropdown.Item><Link to="/reports/week/6">Week 6</Link></Dropdown.Item>
                <Dropdown.Item><Link to="/reports/week/10">Week 10</Link></Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                </Nav.Item>

                <Nav.Item>
                    <p class="navLinks"><Link to="/form">Form</Link></p>
                </Nav.Item>
                <Nav.Item>
                <p class="navLinks"><Link to="/login">Login</Link></p>
                </Nav.Item>
                <Nav.Item>
                <p class="navLinks"><Link to="/add">Add</Link></p>
                </Nav.Item>
                <Nav.Item>
                <p class="navLinks"><Link to="/edit">Edit</Link></p>
                </Nav.Item>
                <Nav.Item>
                <p class="navLinks"><Link to="/chat">Chat</Link></p>
                </Nav.Item>



            </Nav>
            </>
        )
    }
}
