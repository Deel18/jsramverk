import React from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

const initialState = {
    redirect: false,
    week: "",
    text: ""
};




export default class Add extends React.Component {

    state = initialState;


    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]: isCheckbox
            ? event.target.checked
            : event.target.value,

        });

    };


    handleSubmit = event => {
        event.preventDefault();
        const headers = {
            "Content-Type": "application/json",
            "x-access-token": localStorage.getItem("token")
        }

        axios({
            method: 'POST',
            url: "http://localhost:1337/reports",
            data: {
                week: this.state.week,
                text: this.state.text
            },
            headers: headers
        })
        .then( (response) => {
            this.setState({ redirect: true });

        })
        .catch( (error) => {
            this.setState({ emailError: "Report was not added." })
            console.log(error)
        })

    };

    render() {
        const { redirect } = this.state;
        let week = "/reports/week/" + this.state.week;
        if (redirect) {
            return <Redirect to={week} />;
        }
        return (
          <div>
              <h2>Add</h2>
              <p> Add a report.</p>
              <br></br>
              <br></br>
              <form onSubmit={this.handleSubmit}>

                  <label className="input-label">
                  Week<br></br>
                      <input autoComplete="off" className="input-field" type="text" name="week" value={this.state.week} onChange={this.handleChange} />
                  </label>
                  <label className="input-label">
                  Text<br></br>
                      <textarea autoComplete="off" className="input-field" type="textarea" name="text" value={this.state.text} onChange={this.handleChange} />
                  </label>
                  <br></br>
                  <input type="submit" value="Submit" />
              </form>
          </div>
        )
    }
}
