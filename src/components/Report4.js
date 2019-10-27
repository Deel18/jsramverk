import React from "react";
import axios from "axios";


export default class Report4 extends React.Component {

    state = {
        kmom04: {}
    }


    componentDidMount() {

        axios.get('https://me-api.deel-ramverk.me/reports/4')
        .then(res => {
            const kmom04 = res.data.response.report;
            this.setState({ kmom04 })
        })
    }

    render() {
        return (
            <div>
                <h2>Kmom04</h2>
                <p> {this.state.kmom04 ? this.state.kmom04.texts : null}</p>
                <p><a href="https://github.com/Deel18/jsramverk">Visit the Github repo</a></p>
            </div>
        )
    }
};
