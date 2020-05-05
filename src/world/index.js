import React, { Component } from 'react';
import './style.css';

class World extends Component {
    constructor() {
        super();
        this.state = {
            global: [],
            positif: [],
            sembuh: [],
            meninggal: []
        }
    }

    componentDidMount() {

        fetch("https://api.kawalcorona.com/positif/")
            .then(res => res.json())
            .then(data => {
                this.setState({
                    positif: data
                },
                    console.log(data))
            })
            .catch(err => console.log("Error = " + err))

        fetch("https://api.kawalcorona.com/sembuh/")
            .then(res => res.json())
            .then(data => {
                this.setState({
                    sembuh: data
                },
                    console.log(data))
            })
            .catch(err => console.log("Error = " + err))

        fetch("https://api.kawalcorona.com/meninggal/")
            .then(res => res.json())
            .then(data => {
                this.setState({
                    meninggal: data
                },
                    console.log(data))
            })
            .catch(err => console.log("Error = " + err))

        fetch("https://api.kawalcorona.com/")
            .then(res => res.json())
            .then(data => {
                this.setState({
                    global: data
                },
                    console.log(data))
            })
            .catch(err => console.log("Error = " + err))
    }

    render() {
        return (
            <div className="cont-world">
                <div className="world">
                    <h1>World</h1>
                    <p>Positif : {this.state.positif.value}</p>
                    <p>Sembuh : {this.state.sembuh.value}</p>
                    <p>Meninggal : {this.state.meninggal.value}</p>
                </div>

                <table>
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Negara</th>
                        <th>Positif</th>
                        <th>Sembuh</th>
                        <th>Meninggal</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.global.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.attributes.Country_Region}</td>
                                        <td>{item.attributes.Confirmed}</td>
                                        <td>{item.attributes.Active}</td>
                                        <td>{item.attributes.Deaths}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default World;
