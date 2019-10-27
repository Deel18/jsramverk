import React from "react";
import axios from "axios";


class Me extends React.Component {

    state = {
        intro: {}
    }


    componentDidMount() {

        axios.get('https://me-api.deel-ramverk.me/reports/0')
        .then(res => {
            const intro = res.data.response.report;
            this.setState({ intro })
        })
    }

    render() {
        return (
            <div>
                <h2>ME</h2>
                <p> {this.state.intro.texts}</p>
            </div>
        )
    }
}

export default Me;
