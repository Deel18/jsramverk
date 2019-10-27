import React from "react";
import axios from "axios";


export default class Report5 extends React.Component {

    state = {
        kmom05: {}
    }


    componentDidMount() {

        axios.get('http://localhost:1337/reports/5')
        .then(res => {
            const kmom05 = res.data.response.report;
            this.setState({ kmom05 })
        })
    }

    render() {
        console.log(this.state.kmom05)
        return (
            <div>
                <h2>Kmom05</h2>
                <p> {this.state.kmom05 ? this.state.kmom05.texts : null}</p>
                <p><a href="https://github.com/Deel18/jsramverk">Visit the Github repo</a></p>
            </div>
        )
    }
};
