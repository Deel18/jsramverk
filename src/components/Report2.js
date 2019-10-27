import React from "react";
import axios from "axios";


export default class Report2 extends React.Component {

    state = {
        kmom02: {}
    }

    componentDidMount() {

        axios.get('https://me-api.deel-ramverk.me/reports/2')
        .then(res => {
            const kmom02 = res.data.response.report;
            this.setState({ kmom02 })
        })
    }


    render() {
        return (
            <div>
                <h2>Kmom02</h2>
                <p> {this.state.kmom02 ? this.state.kmom02.texts : null}</p>
                <p><a href="https://github.com/Deel18/jsramverk">Visit the Github repo</a></p>
            </div>
        )
    }
}
