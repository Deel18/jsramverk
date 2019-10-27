import React from "react";
import axios from "axios";


export default class Report2 extends React.Component {

    state = {
        kmom02: {}
    }

    componentDidMount() {

        axios.get('http://localhost:1337/reports/2')
        .then(res => {
            const kmom02 = res.data.response.report;
            this.setState({ kmom02 })
        })
    }


    render() {
        console.log(this.state.intro)
        return (
            <div>
                <h2>Kmom01</h2>
                <p> {this.state.kmom02.texts}</p>
                <p><a href="https://github.com/Deel18/jsramverk">Visit the Github repo</a></p>
            </div>
        )
    }
}
