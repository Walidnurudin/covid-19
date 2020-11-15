import React, { Component } from 'react';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount() {

        fetch("https://dekontaminasi.com/api/id/covid19/stats")
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch(err => console.log("Error = " + err))
    }


    render() {
        return (
            <div>
                <p>{this.state.data}</p>
            </div>
        )
    }
}

export default Home;
