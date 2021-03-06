import React from "react";
import axios from "axios";


export default class Report3 extends React.Component {

    state = {
        kmom03: {}
    }


    componentDidMount() {

        axios.get('https://me-api.deel-ramverk.me/reports/3')
        .then(res => {
            const kmom03 = res.data.response.report;
            this.setState({ kmom03 })
        })
    }

    render() {
        return (
            <div>
                <h2>Kmom03</h2>
                <p> {this.state.kmom03 ? this.state.kmom03.texts : null}</p>
                <p><a href="https://github.com/Deel18/jsramverk">Visit the Github repo</a></p>
            </div>
        )
    }
};
