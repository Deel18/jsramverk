import React from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

const initialState = {
    name: "",
    email: "",
    password: "",
    gdpr: "",
    year: "2019",
    month: "January",
    day: "1",
    nameError: "",
    emailError: "",
    passwordError: "",
    gdprError: "",
    dobError: "",
    redirect: false,
    registered: "",
};




export default class ValidationForm extends React.Component {

    state = initialState;


    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]: isCheckbox
            ? event.target.checked
            : event.target.value,

        });

    };


    validate = () => {
        let nameError: "";
        let emailError: "";
        let passwordError: "";
        let gdprError: "";
        let dobError: "";

        const passwordRegex = /(?=.*[0-9])/


        if (!this.state.name) {
            nameError = "Name cannot be blank!";
        }


        if (!this.state.email.includes('@')) {
            emailError = "Invalid email!";
        }

        if (!this.state.password) {
            passwordError = "Password cannot be blank!";
        } else if (this.state.password.length < 8) {
            passwordError = "Password cannot be less than 8 characters!"
        } else if (!passwordRegex.test(this.state.password)) {
            passwordError = "Password must contain one number!"
        }

        if (this.refs.month.value === "February" && this.refs.day.value > 28) {
            dobError = "Invalid date!"
        } else if ((this.refs.month.value === "April" || this.refs.month.value === "June" || this.refs.month.value === "September" || this.refs.month.value === "November") && this.refs.day.value > 30) {
            dobError = "Invalid date!"
        }

        if (!this.state.gdprError) {
            gdprError = "Box must be ticked!"
        }


        if (emailError || nameError || passwordError || dobError || gdprError) {
            this.setState({ emailError, nameError, passwordError, dobError, gdprError});
            return false;
        }
        return true;
    }

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            this.setState(initialState);

            axios({
                method: 'POST',
                url: "https://me-api.deel-ramverk.me/register",
                data: {
                    email: this.state.email,
                    password: this.state.password,
                    dob: this.state.year,
                    name: this.state.name
                }
            })
            .then( (response) => {
                console.log(response);
                this.setState({ redirect: true })
            })
            .catch( (error) => {
                console.log(error)
                this.setState({
                    registered: "This user is already registered. Please try again."
                })
                //user already register message
            })
        }


    };



    render() {

        const years = [];
        const months = ["January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December"];

        const days = [];

        for (var i = 2019; i >= 1920; i--) {
            years.push(i);
        }

        for (var x = 1; x <= 31; x++) {
            days.push(x);
        }

        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to="/login"/>;
        }

        return (
          <div>
              <h2>Form</h2>
              <p> Register in order to submit your own presentation texts.</p>
              <br></br>
              <br></br>
              <form onSubmit={this.handleSubmit}>
                  <label className="input-label">
                  <div style={{color: "red", fontSize: 18}}>
                  {this.state.registered}
                  </div>
                  <br></br>
                  Name*<br></br>
                      <input autoComplete="off" className="input-field" type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                      <div style={{color: "red", fontSize: 18}}>
                      {this.state.nameError}
                      </div>
                  </label>
                  <label className="input-label">
                  E-mail*<br></br>
                      <input autoComplete="off" className="input-field" type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                      <div style={{color: "red", fontSize: 18}}>
                      {this.state.emailError}
                      </div>
                  </label>
                  <label className="input-label">
                  Password*<br></br>
                  <b style={{color: "#61DAFB"}}>Minimum 8 characters and 1 number</b>
                  <br></br>
                      <input autoComplete="off" className="input-field" type="text" name="password" value={this.state.password} onChange={this.handleChange} />
                      <div style={{color: "red", fontSize: 18}}>
                      {this.state.passwordError}
                      </div>
                  </label>
                  <label className="input-label">
                  Date of birth*<br></br>

                  <select  ref="day" className="date-field" onChange={e => this.setState({ day: e.target.value })}>
                  {days.map((value, index) => {
                      return <option key={index} name="day" value={value}>{value}</option>
                  })}
                  </select>

                  <select ref="month" className="date-field" onChange={e => this.setState({ month: e.target.value })}>
                  {months.map((value, index) => {
                      return <option key={index} name="month" value={value}>{value}</option>
                  })}
                  </select>

                  <select className="date-field" onChange={e => this.setState({ year: e.target.value })}>
                  {years.map((value, index) => {
                      return <option key={index} name="year" value={value}>{value}</option>
                  })}
                  </select>

                  <div style={{color: "red", fontSize: 18}}>
                  {this.state.dobError}
                  </div>
                  </label>


                  <label className="input-label">
                      <input type="checkbox" name="gdpr"/>
                      {" "}<b style={{color: "#61DAFB"}}>I hereby give up all rights to my data.</b>
                      <div style={{color: "red", fontSize: 18}}>
                      {this.state.gdprError}
                      </div>
                  </label>
                  <input type="submit" value="Submit" />
              </form>
          </div>
        )
    }
}
