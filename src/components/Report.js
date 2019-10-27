import React from "react";
import axios from "axios";


export default class Report extends React.Component {

    state = {
        kmom01: {}
    }

    componentDidMount() {

        axios.get('https://me-api.deel-ramverk.me/reports/1')
        .then(res => {
            const kmom01 = res.data.response.report;
            this.setState({ kmom01 })
        })
        .catch( (error) => {
            console.log(error)
        })
    }


    render() {
        return (
            <div>
                <h2>Kmom01</h2>
                <p> {this.state.kmom01 ? this.state.kmom01.texts : null}</p>
                <p><a href="https://github.com/Deel18/jsramverk">Visit the Github repo</a></p>
            </div>
        )
    }
}
