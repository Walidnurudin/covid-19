import React, { Component } from 'react';
import axios from "axios";
import { Container } from 'reactstrap';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            numbers: {},
            regions: []
        }
    }

    componentDidMount() {

        axios.get("https://dekontaminasi.com/api/id/covid19/stats")
            .then(res => res.data)
            .then(res => {
                this.setState({
                    name: res.name,
                    numbers: res.numbers,
                    regions: res.regions
                })
                console.log(this.state)
            })
            .catch(err => console.log("Error = " + err))
    }


    render() {
        return (
            <Container>
                <h1>{this.state.name}</h1>
                <div>
                    <h3>Positif : {this.state.numbers.infected}</h3>
                    <h3>Sembuh : {this.state.numbers.recovered}</h3>
                    <h3>Meninggal : {this.state.numbers.fatal}</h3>
                </div>

                <div class="table-responsive-sm">
                    <table class="table">
                        <caption>List of regions</caption>
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Provinsi</th>
                                <th scope="col">Positif</th>
                                <th scope="col">Sembuh</th>
                                <th scope="col">Meninggal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.regions.map((data, index) => {
                                return (
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{data.name}</td>
                                        <td>{data.numbers.infected}</td>
                                        <td>{data.numbers.recovered}</td>
                                        <td>{data.numbers.fatal}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </Container>
        )
    }
}

export default Home;
