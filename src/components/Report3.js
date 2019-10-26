import React from "react";
import axios from "axios";


export default class Report3 extends React.Component {

    state = {
        intro: {}
    }


    componentDidMount() {

        axios.get('http://localhost:1337/reports/2')
        .then(res => {
            const intro = res.data.response.report;
            this.setState({ intro })
        })
    }

    render() {
        console.log(this.state.intro)
        return (
            <div>
                <h2>Kmom03</h2>
                <p> {this.state.intro ? this.state.intro.texts : null}</p>
            </div>
        )
    }
};
