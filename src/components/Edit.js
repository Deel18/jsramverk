import React from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";





export default class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            week: "0",
            text: "",
            allTexts: {}
        }
        //console.log(this.state.week)
        //console.log(this.state.text)
    }

    componentDidMount() {

        axios.get('https://me-api.deel-ramverk.me/reports')
        .then(res => {
            const allTexts = res.data.response.reports;

            console.log(this.state.week)
            this.setState({ allTexts })
            this.setState({ text: allTexts[0].texts })
            //console.log(allTexts[0].texts)
            //console.log("componentdidmount", this.state)
        })
    }


    handleChange = event => {

        this.setState({
            [event.target.name]: event.target.value,

        });

        this.setState({ text: this.state.allTexts[event.target.value].texts })
    };



    handleSubmit = event => {
        event.preventDefault();
        const headers = {
            "Content-Type": "application/json",
            "x-access-token": localStorage.getItem("token")
        }

        axios({
            method: 'POST',
            url: "https://me-api.deel-ramverk.me/reports/update",
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
            this.setState({ redirect: true });
            console.log(error)
        })

    };

    render() {
        const { redirect } = this.state;
        let week = "/reports/week/" + this.state.week;
        if (redirect) {
            return <Redirect to={week} />;
        }
        const weeks = []
        for (const key of Object.keys(this.state.allTexts)) {
                weeks.push(this.state.allTexts[key].week)
        }
        //console.log("array", weeks)
        //console.log(this.state.allTexts)
        //console.log("test", test)
        return (
          <div>
              <h2>Edit</h2>
              <p> Edit a report.</p>
              <br></br>
              <br></br>
              <form onSubmit={this.handleSubmit}>

                  <label className="input-label">
                  Week <br></br>
                  <select name="week" className="date-field" onChange={this.handleChange}>
                  {weeks.map((value, index) => {
                      return <option key={index} value={value}>{value}</option>
                  })}
                  </select>

                  </label>
                  <label className="input-label">
                  Text<br></br>
                      <textarea autoComplete="off" className="text-field" type="textarea" name="text" value={this.state.text} onChange={e => {this.setState({ text: e.target.value })}} />
                  </label>
                  <br></br>
                  <input type="submit" value="Submit" />
              </form>
          </div>
        )
    }
}
