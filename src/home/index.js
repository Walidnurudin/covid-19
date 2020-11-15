import React, { Component } from 'react';
import axios from "axios";
import { Container, Spinner } from 'reactstrap';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            numbers: {},
            regions: [],
            loading: false
        }
    }

    componentDidMount() {
        this.setState({ loading: true });
        axios.get("https://dekontaminasi.com/api/id/covid19/stats")
            .then(res => res.data)
            .then(res => {
                this.setState({
                    name: res.name,
                    numbers: res.numbers,
                    regions: res.regions,
                    loading: false
                })
                console.log(this.state)
            })
            .catch(err => {
                this.setState({ loading: false })
                console.log("Error = " + err)
            })
    }

    loading() {
        if (this.state.loading) {
            return (
                <Container style={{ textAlign: 'center' }}>
                    <Spinner style={{ width: '3rem', height: '3rem', marginTop: '50px' }} type="grow" color="danger" />
                </Container>
            )
        }
    }



    render() {
        return (
            <Container style={{marginTop: "50px"}}>
                {this.loading()}

                <div style={{textAlign: 'center'}}>
                    <h1>{this.state.name}</h1>

                    <div className="d-flex justify-content-between">
                        <h3>Positif : {this.state.numbers.infected}</h3>
                        <h3>Sembuh : {this.state.numbers.recovered}</h3>
                        <h3>Meninggal : {this.state.numbers.fatal}</h3>
                    </div>
                </div>

                <div style={{marginTop: "50px"}} class="table-responsive-sm">
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
                            {
                                this.state.regions.map((data, index) => {
                                    return (
                                        <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td>{data.name}</td>
                                            <td>{data.numbers.infected}</td>
                                            <td>{data.numbers.recovered}</td>
                                            <td>{data.numbers.fatal}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </Container>
        )
    }
}

export default Home;
